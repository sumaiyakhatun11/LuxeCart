// In-memory data storage
let items = [
  {
    _id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    rating: 4.5,
    inStock: true,
    createdAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    rating: 4.3,
    inStock: true,
    createdAt: new Date('2024-01-16')
  },
  {
    _id: '3',
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with RFID protection',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
    category: 'Accessories',
    rating: 4.7,
    inStock: true,
    createdAt: new Date('2024-01-17')
  }
];

let nextId = 4;

export function getItems() {
  return items;
}

export function getItemById(id) {
  return items.find(i => i._id === id);
}

export function addItem(itemData) {
  const newItem = {
    _id: String(nextId++),
    name: itemData.name,
    description: itemData.description,
    price: itemData.price,
    image: itemData.photoUrl || itemData.image || '',
    category: itemData.category || 'General',
    rating: itemData.rating || 0,
    inStock: typeof itemData.inStock === 'boolean' ? itemData.inStock : true,
    createdAt: new Date()
  };
  
  items.push(newItem);
  return newItem;
}
