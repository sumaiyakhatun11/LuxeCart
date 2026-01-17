'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  const id = params.id;

  useEffect(() => {
    if (id) {
      fetchItem();
    }
  }, [id]);

  const fetchItem = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/items/${id}`);
      if (!response.ok) {
        throw new Error('Item not found');
      }
      const data = await response.json();
      setItem(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    // Simulate add to cart
    alert(`Added ${quantity} ${item.name}(s) to cart!`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Error: {error}</p>
          <Link href="/items" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/items" className="text-[#fca311] hover:text-[#14213d] font-semibold mb-8 inline-block transition-colors">
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              {item.image && !imageError ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={handleImageError} />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3">
                  <img 
                    src="/logo.png" 
                    alt="LuxeCart Logo" 
                    className="h-24 w-24 object-contain opacity-30"
                  />
                  <span className="text-gray-400">No Image Available</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-[#fca311] bg-opacity-20 text-[#14213d] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {item.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-[#fca311]">৳{item.price}</span>
                <span className="text-yellow-500 text-xl">★ {item.rating}</span>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {item.description}
            </p>

            {/* Stock Status */}
            <div className="mb-8">
              {item.inStock ? (
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-green-700 font-semibold">In Stock</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-red-700 font-semibold">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!item.inStock}
                className="w-full bg-gradient-to-r from-[#fca311] to-[#fca311] hover:from-[#14213d] hover:to-[#14213d] text-[#14213d] hover:text-[#fca311] disabled:bg-gray-400 disabled:text-white font-semibold py-3 rounded-lg transition-all"
              >
                {item.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Product Information</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Product ID:</span>
                  <span className="font-semibold">#{item.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-semibold">{item.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="font-semibold">{item.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="font-semibold">
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
          <div className="text-center py-8">
            <p className="text-gray-600">Related products coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
