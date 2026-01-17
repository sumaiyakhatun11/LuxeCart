'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/items');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-3">Our Products</h1>
          <p className="text-gray-600 text-lg">Browse our curated collection of premium products</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <svg className="absolute left-4 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fca311] focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
            />
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">Found {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}</p>
          )}
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-[#fca311] rounded-full animate-spin"></div>
            </div>
            <p className="text-gray-600 text-lg font-medium">Loading products...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-xl font-medium mb-2">No products found</p>
            <p className="text-gray-400">{searchTerm ? 'Try adjusting your search' : 'Be the first to add a product!'}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden group cursor-pointer h-full border border-gray-100">
                  <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                    {item.image && !imageErrors[item.id] ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <span className="text-gray-400 text-lg">No Image</span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-3 right-3 bg-[#fca311] text-[#14213d] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      ⭐ {item.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-slate-900">{item.name}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{item.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-[#fca311]">৳{item.price.toFixed(2)}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.inStock 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-red-50 text-red-700'
                      }`}>
                        {item.inStock ? '✓ In Stock' : '✗ Out'}
                      </span>
                    </div>

                    {item.inStock ? (
                      <button className="w-full bg-gradient-to-r from-[#fca311] to-[#fca311] hover:from-[#14213d] hover:to-[#14213d] text-[#14213d] hover:text-[#fca311] font-semibold py-2 rounded-lg transition-all">
                        View Details
                      </button>
                    ) : (
                      <button className="w-full bg-gray-300 text-gray-600 font-semibold py-2 rounded-lg cursor-not-allowed">
                        Unavailable
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
