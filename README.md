# LuxeCart - Premium E-Commerce Platform

A modern, full-stack e-commerce application built with Next.js 16, React, Express.js, and SQLite. Features a responsive design with Tailwind CSS, user authentication, professional branding, and a complete product management system.

## 📋 Project Overview

LuxeCart is a premium e-commerce platform that demonstrates modern web development practices including:
- **Server-side rendering** with Next.js App Router (Turbopack)
- **RESTful API** with Express.js
- **Database management** with SQLite
- **User authentication** with cookie-based sessions
- **Responsive design** with Tailwind CSS and custom color scheme
- **Protected routes** for authenticated users only
- **Bangladesh-localized content** with BDT currency and local payment methods

## ✨ Features Implemented

### 1. **Landing Page** (12 Comprehensive Sections)
   - **Hero Banner** with call-to-action and gradient background
   - **Featured Products** showcase with BDT pricing
   - **Why Choose LuxeCart** with 6 key benefits
   - **Shop by Category** for product browsing
   - **Statistics Section** - 50K+ customers, 64 districts, 98% satisfaction
   - **Premium Features** - Cash on Delivery, Festival Offers, 24/7 Support
   - **Customer Testimonials** with verified reviews
   - **How It Works** step-by-step guide
   - **Newsletter Signup** for customer engagement
   - **FAQ Section** with delivery & payment questions
   - **Call-to-Action** banners
   - **Trust Badges** - Secure shopping, authentic products

### 2. **Authentication System**
   - Mock login with hardcoded credentials
   - Credentials stored in HTTP-only cookies
   - Protected routes for authenticated users
   - Logout functionality
   - Demo credentials displayed on login page
   - Responsive login form with brand colors

### 3. **Product Management**
   - **Items List Page**: Browse all products with search functionality
   - **Item Details Page**: View full product information with image placeholder fallback
   - **Add Item Page**: Protected route for authenticated users to add new products
   - **Photo URL Support**: Add product images via URL
   - Real-time data fetching from Express API
   - Toast notifications on successful product creation with auto-redirect
   - Error handling with user-friendly messages

### 4. **Professional Design & Branding**
   - **LuxeCart Logo**: Integrated in navbar, footer, and product details page
   - **Custom Color Scheme**: 
     - Primary Navy: #14213d
     - Accent Orange: #fca311
     - Light Gray: #e5e5e5
     - Black: #000000
     - White: #ffffff
   - **Gradient Backgrounds**: Modern visual appeal across all pages
   - **Responsive Design**: Mobile-first approach with Tailwind CSS
   - **Professional Typography**: Clear hierarchy and readability

### 5. **Information Pages**
   - **About Page**: Company story, core values, mission & vision
   - **Contact Page**: Contact form, address, phone, email, social media links, FAQ
   - **Terms & Conditions**: Legal information
   - **Privacy Policy**: Data protection details
   - **Cookies Policy**: Cookie usage information

### 6. **Navigation & Footer**
   - **Sticky Navbar** with logo and navigation links
   - **Active Link Highlighting** based on current page
   - **Comprehensive Footer** with quick links, social media, and contact information
   - **Social Media Links**: Facebook, Instagram, WhatsApp, LinkedIn
   - **Real Contact Details**: PUST Pabna address, email, and phone

### 7. **API & Database**
   - Express.js REST API running on port 5000
   - SQLite database with full CRUD operations
   - Item schema: name, description, price, photoUrl, category, rating, inStock, createdAt
   - Health check endpoint
   - Error handling and validation

## 🚀 Setup & Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assignment-8-scic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Express backend server** (in a separate terminal)
   ```bash
   npm run server
   ```
   The backend will run on `http://localhost:5000`

4. **Start the Next.js development server** (in another terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

5. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

### Running Both Servers Simultaneously
```bash
npm run dev-all
```
This uses `concurrently` to run both the Next.js dev server and Express backend at the same time.

## 🔐 Login Credentials

**Demo Account:**
- **Email:** user@example.com
- **Password:** password123

These credentials are displayed on the login page for convenience.

## 📁 Project Structure

```
assignment-8-scic/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root layout with Navbar & Footer
│   │   ├── page.js                   # Landing page with 12 sections
│   │   ├── globals.css               # Global styles
│   │   ├── about/
│   │   │   └── page.js               # About us page
│   │   ├── contact/
│   │   │   └── page.js               # Contact page with form
│   │   ├── terms/
│   │   │   └── page.js               # Terms & Conditions
│   │   ├── privacy/
│   │   │   └── page.js               # Privacy Policy
│   │   ├── cookies/
│   │   │   └── page.js               # Cookies Policy
│   │   ├── login/
│   │   │   └── page.js               # Authentication page
│   │   ├── items/
│   │   │   ├── page.js               # Items list page with search
│   │   │   └── [id]/
│   │   │       └── page.js           # Item details page (dynamic)
│   │   └── add-item/
│   │       └── page.js               # Protected add item page
│   └── components/
│       ├── Navbar.jsx                # Navigation with LuxeCart logo
│       └── Footer.jsx                # Footer with social links & contact
├── backend/
│   └── server.js                     # Express API server
├── public/
│   └── logo.png                      # LuxeCart brand logo
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## 🛣️ Route Summary

### Public Routes
| Route | Purpose |
|---|---|
| `/` | Landing page (12 sections) |
| `/items` | Product list page with search |
| `/items/[id]` | Product details page |
| `/about` | About LuxeCart page |
| `/contact` | Contact us page with form |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |
| `/cookies` | Cookies Policy |
| `/login` | Authentication page |

### Protected Routes
| Route | Purpose | Access |
|---|---|---|
| `/add-item` | Add new product form | Logged-in users only |

## ✨ Advanced Features Implemented

### Beyond Requirements
- ✅ **Logo Integration**: Custom LuxeCart logo in navbar, footer, and product details
- ✅ **Custom Color Scheme**: Professional 5-color palette across all pages
- ✅ **Comprehensive Landing Page**: 12 sections (exceeds 7-section requirement)
- ✅ **Toast Notifications**: Auto-redirect on successful product creation
- ✅ **Search Functionality**: Filter products by name on items page
- ✅ **Image Error Handling**: Fallback to logo for missing product images
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Bangladesh Localization**: BDT currency, local payment methods, relevant content
- ✅ **Social Media Integration**: Links to real social profiles
- ✅ **Real Contact Information**: PUST Pabna address and contact details
- ✅ **Multiple Information Pages**: About, Contact, Terms, Privacy, Cookies
- ✅ **Professional UI/UX**: Gradients, animations, hover effects, shadows
- ✅ **Favicon**: Custom logo as favicon across all pages
- ✅ **Form Validation**: Required field checks with error messages
- ✅ **Cookie-based Authentication**: Secure credential storage

## 🎯 API Endpoints

### Items API (Express on port 5000)

**GET** `/api/items`
- Fetch all products
- Response: Array of items

**GET** `/api/items/:id`
- Fetch single product by ID
- Response: Item object

**POST** `/api/items`
- Create new item (requires: name, description, price)
- Optional: category, rating, photoUrl, inStock
- Response: Created item with ID

**GET** `/`
- Health check endpoint
- Response: "Server is running!"
│   └── server.js                     # Express.js API server
├── public/                           # Static assets
├── package.json                      # Project dependencies
├── tailwind.config.js                # Tailwind CSS config
└── README.md                         # This file
```

## 🛣️ Route Summary

| Route | Description | Public | Protected |
|-------|-------------|--------|-----------|
| `/` | Landing page with 7 sections | ✅ | ❌ |
| `/login` | User login page | ✅ | ❌ |
| `/items` | Browse all products | ✅ | ❌ |
| `/items/[id]` | Product details page | ✅ | ❌ |
| `/add-item` | Add new product form | ❌ | ✅ |

## 💻 API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get item by ID |
| POST | `/api/items` | Create new item |
| GET | `/health` | Health check |

### Sample Request (Create Item)
```bash
curl -X POST http://localhost:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Product",
    "description": "Product description",
    "price": 99.99,
    "category": "Electronics",
    "rating": 4.5
  }'
```

## 🎨 Technologies Used

- **Frontend:**
  - Next.js 16.1.2
  - React 19.2.3
  - Tailwind CSS 4.0
  - Axios for HTTP requests

- **Backend:**
  - Express.js 4.18
  - SQLite3 5.1.0
  - CORS middleware

- **Development:**
  - ESLint for code quality
  - PostCSS for CSS processing
  - Concurrently for running multiple processes

## 🔄 Data Flow

1. **User visits landing page** → Fetches featured products from Express API
2. **User searches products** → Filters items client-side
3. **User clicks product** → Navigates to detail page with full information
4. **User logs in** → Credentials validated, cookie stored
5. **Authenticated user adds item** → Data sent to Express API, saved to SQLite
6. **Page refreshes** → New item appears in products list

## 🧪 Testing Features

### Test the Landing Page
- Visit `http://localhost:3000`
- View all 7 sections
- Click on featured products

### Test Authentication
- Click "Login" in navbar
- Use credentials: `user@example.com` / `password123`
- Try with wrong credentials to see error message

### Test Products
- Browse items on `/items` page
- Search for products
- Click on any product to see details
- Check Add Item page (only available when logged in)

### Test Add Item (Protected)
- Login with demo credentials
- Click "Add Item" in navbar
- Fill in product details
- Submit form to add new item
- Verify item appears on items list

## 📦 Database Schema

### Items Table
```sql
CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price REAL NOT NULL,
  photoUrl TEXT,
  category TEXT,
  rating REAL DEFAULT 0,
  inStock INTEGER DEFAULT 1,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## 🚀 Quick Start

### For First-Time Users
```bash
# 1. Install dependencies
npm install

# 2. Start both servers (in one command)
npm run dev-all

# 3. Open browser to http://localhost:3000

# 4. Use demo credentials to login
# Email: user@example.com
# Password: password123
```

## ❓ FAQ

**Q: Why is the database empty?**
A: By design, we removed pre-loaded data. You can add products using the "Add Item" page after logging in.

**Q: Can I add my own products?**
A: Yes! Login with the demo credentials and use the "Add Item" page. Include an image URL for the product photo.

**Q: Is authentication secure?**
A: This is a demo project with mock authentication. For production, use NextAuth.js or similar solutions.

**Q: Can I use my own image URLs?**
A: Yes! When adding a product, provide any valid image URL (HTTPS recommended).

## 📝 License

This project is open-source and available under the MIT License.

## 👨‍💻 Development Notes

- **Node Version**: 18+ recommended
- **Package Manager**: npm or yarn
- **Build System**: Next.js Turbopack (faster builds)
- **Styling**: Tailwind CSS with custom configuration
- **Database**: SQLite (no separate DB server needed)

---

**Built with ❤️ for modern e-commerce applications**

### Sample Data
The database comes pre-populated with 6 sample products across different categories.

## 🚀 Deployment

### Deploy to Vercel (Frontend)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set environment variables if needed
4. Deploy!

### Deploy Express API

You can deploy the Express backend to services like:
- Heroku
- Railway
- Render
- AWS EC2

Update the API endpoint in your Next.js components:
```javascript
const response = await fetch('https://your-api.com/api/items');
```

## 🐛 Troubleshooting

### Backend Not Connecting
- Ensure Express server is running on port 5000
- Check that CORS is enabled
- Verify firewall isn't blocking the connection

### Login Issues
- Clear cookies: `document.cookie`
- Check browser console for errors
- Verify credentials are correct

### Products Not Loading
- Check backend server logs
- Verify SQLite database file exists (`backend/items.db`)
- Ensure API endpoint URL is correct

## 📝 Notes

- The application uses mock authentication for demo purposes
- Product images are placeholders - replace with actual images in production
- The database is stored as a file (`items.db`) - use proper database in production
- For production, implement proper authentication with NextAuth.js
- Add environment variables for sensitive data

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

Created as an assignment for learning Next.js and full-stack development.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
