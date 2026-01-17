const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const dbPath = path.join(__dirname, 'items.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.serialize(() => {
    // Create items table
    db.run(`
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price REAL NOT NULL,
        image TEXT,
        category TEXT,
        rating REAL DEFAULT 0,
        inStock INTEGER DEFAULT 1,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error creating items table:', err.message);
      } else {
        console.log('Items table ready');
      }
    });
  });
}

// Routes

// Get all items
app.get('/api/items', (req, res) => {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Get single item
app.get('/api/items/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(row);
    }
  });
});

// Create new item
app.post('/api/items', (req, res) => {
  const { name, description, price, photoUrl, image, category, rating } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = `
    INSERT INTO items (name, description, price, image, category, rating)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  // Use photoUrl if provided, otherwise use image, otherwise use default
  const imageUrl = photoUrl || image || '/images/default.jpg';

  db.run(
    query,
    [name, description, price, imageUrl, category || 'General', rating || 0],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID, name, description, price });
      }
    }
  );
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Debug: Get database info
app.get('/api/debug/items', (req, res) => {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ 
        count: rows ? rows.length : 0, 
        items: rows 
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed');
    }
    process.exit(0);
  });
});
