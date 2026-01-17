'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddItemPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'General',
    rating: '4',
    photoUrl: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Check authentication
    const checkAuth = () => {
      const authCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth='));
      
      if (!authCookie) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.description || !formData.price) {
        setError('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          category: formData.category,
          rating: parseFloat(formData.rating),
          photoUrl: formData.photoUrl,
          inStock: true
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      // Show success message
      setShowSuccess(true);
      setFormData({
        name: '',
        description: '',
        price: '',
        category: 'General',
        rating: '4',
        photoUrl: ''
      });

      // Hide success message and redirect after 2 seconds
      setTimeout(() => {
        router.push('/items');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to add item');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e5e5e5] to-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2">Add New Product</h1>
          <p className="text-gray-600 mb-8">Fill in the details below to add a new product to our store</p>

          {showSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold">Product Added Successfully!</p>
                <p className="text-sm">Redirecting to products page...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Price (BDT) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
              >
                <option value="General">General</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Home">Home & Garden</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Initial Rating (0-5)
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
              />
            </div>

            {/* Product Photo URL */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Product Photo URL
              </label>
              <input
                type="url"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                placeholder="https://example.com/product-image.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311]"
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[#fca311] to-[#fca311] hover:from-[#14213d] hover:to-[#14213d] text-[#14213d] hover:text-[#fca311] font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product'}
              </button>
              <Link
                href="/items"
                className="flex-1 bg-[#14213d] hover:bg-[#000000] text-white font-semibold py-3 rounded-lg transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </form>

          <p className="text-gray-600 text-sm mt-6 pt-6 border-t border-gray-200">
            Fields marked with * are required
          </p>
        </div>
      </div>
    </div>
  );
}
