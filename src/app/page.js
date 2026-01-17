'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    fetchFeaturedItems();
  }, []);

  const fetchFeaturedItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/items`);
      const data = await response.json();
      setFeaturedItems(data.slice(0, 3));
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Banner */}
      <section className="bg-gradient-to-br from-[#14213d] via-[#000000] to-[#14213d] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight"><span className="text-[#e5e5e5]">Luxe</span><span className="text-[#fca311]">Cart</span><span className="text-[#fca311]">.</span></h1>
          <p className="text-xl text-gray-200 mb-3">Bangladesh's Premium E-Commerce Platform</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Discover curated products with exceptional quality delivered across Bangladesh. Your trusted destination for premium online shopping.</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/items"
              className="bg-[#fca311] hover:bg-[#e69500] text-[#14213d] px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Products
            </Link>
            <Link
              href="/login"
              className="bg-white text-[#14213d] hover:bg-[#e5e5e5] px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Featured Products</h2>
            <p className="text-center text-gray-600 text-lg">Handpicked selections for you</p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block">
                <div className="w-12 h-12 border-4 border-[#e5e5e5] border-t-[#fca311] rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600 mt-4 font-medium">Loading featured products...</p>
            </div>
          ) : featuredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredItems.map((item) => (
                <Link key={item.id} href={`/items/${item.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden group cursor-pointer h-full border border-gray-100">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                      {item.image && !imageErrors[item.id] ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" onError={() => handleImageError(item.id)} />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                      <div className="absolute top-3 right-3 bg-[#fca311] text-[#14213d] px-3 py-1 rounded-full text-sm font-semibold">
                        ⭐ {item.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-[#14213d] line-clamp-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-[#fca311]">৳{item.price}</span>
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">In Stock</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#14213d]">Why Choose LuxeCart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2 text-[#14213d]">Dhaka & Nationwide Delivery</h3>
              <p className="text-gray-600">Fast delivery across all districts of Bangladesh, from Dhaka to Chittagong.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-[#14213d]">Best Prices in BDT</h3>
              <p className="text-gray-600">Competitive pricing in Bangladeshi Taka with cash on delivery available.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2 text-[#14213d]">বিকাশ, নগদ & Card Payment</h3>
              <p className="text-gray-600">Secure payments via bKash, Nagad, mobile banking, and credit/debit cards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Categories */}
      <section className="py-20 bg-gradient-to-br from-[#14213d] to-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Shop by Category</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">Browse our diverse product categories</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Electronics', 'Accessories', 'Home', 'Fashion', 'General'].map((category) => (
              <Link key={category} href={`/items?category=${category}`}>
                <div className="bg-white/10 backdrop-blur-sm hover:bg-[#fca311] text-center p-8 rounded-xl transition-all transform hover:scale-105 cursor-pointer border border-white/20">
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Statistics */}
      <section className="py-20 bg-[#fca311]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-[#14213d]">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <p className="text-lg font-semibold">Bangladeshi Customers</p>
            </div>
            <div className="text-[#14213d]">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-lg font-semibold">Products Available</p>
            </div>
            <div className="text-[#14213d]">
              <div className="text-5xl font-bold mb-2">64</div>
              <p className="text-lg font-semibold">Districts Covered</p>
            </div>
            <div className="text-[#14213d]">
              <div className="text-5xl font-bold mb-2">৳ 0</div>
              <p className="text-lg font-semibold">Delivery in Dhaka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Special Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#14213d]">Our Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl">✨</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Quality Assurance</h3>
                <p className="text-gray-600">Every product goes through rigorous quality checks to ensure you receive only the best.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl">🔄</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Cash on Delivery</h3>
                <p className="text-gray-600">Pay with cash when you receive your order. No advance payment needed for most areas.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl">🎁</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Eid & Festival Deals</h3>
                <p className="text-gray-600">Special discounts during Eid, Pohela Boishakh, and other Bangladeshi festivals.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl">📱</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Track Orders</h3>
                <p className="text-gray-600">Real-time order tracking so you always know where your package is.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#14213d]">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Trusted by thousands of satisfied shoppers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#fca311] text-xl">★</span>)}
              </div>
              <p className="text-gray-600 mb-6">"ঢাকায় পরেরদিন ডেলিভারি পেয়েছি। প্রোডাক্ট কোয়ালিটি অসাধারণ! LuxeCart এখন আমার প্রিয় শপিং সাইট।"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#14213d] rounded-full flex items-center justify-center text-white font-bold">TA</div>
                <div>
                  <p className="font-semibold text-[#14213d]">Tasnuva Akter</p>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#fca311] text-xl">★</span>)}
              </div>
              <p className="text-gray-600 mb-6">"বিকাশে পেমেন্ট করা সহজ ছিল। কাস্টমার সার্ভিস খুব ভালো এবং প্রোডাক্ট একদম ছবির মতো!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#14213d] rounded-full flex items-center justify-center text-white font-bold">RI</div>
                <div>
                  <p className="font-semibold text-[#14213d]">Rafiul Islam</p>
                  <p className="text-sm text-gray-500">Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#fca311] text-xl">★</span>)}
              </div>
              <p className="text-gray-600 mb-6">"সিলেটে থেকেও দ্রুত ডেলিভারি পেয়েছি। দাম ভালো এবং অরিজিনাল প্রোডাক্ট। Highly recommend!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#14213d] rounded-full flex items-center justify-center text-white font-bold">NS</div>
                <div>
                  <p className="font-semibold text-[#14213d]">Nusrat Sultana</p>
                  <p className="text-sm text-gray-500">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#14213d]">How It Works</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Shopping made simple in 4 easy steps</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#fca311] rounded-full flex items-center justify-center text-3xl font-bold text-[#14213d] mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-[#14213d]">Browse Products</h3>
              <p className="text-gray-600">Explore our wide range of premium quality products</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#fca311] rounded-full flex items-center justify-center text-3xl font-bold text-[#14213d] mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-[#14213d]">Add to Cart</h3>
              <p className="text-gray-600">Select your favorites and add them to your cart</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#fca311] rounded-full flex items-center justify-center text-3xl font-bold text-[#14213d] mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-[#14213d]">Secure Checkout</h3>
              <p className="text-gray-600">Complete your purchase with our secure payment system</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#fca311] rounded-full flex items-center justify-center text-3xl font-bold text-[#14213d] mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-[#14213d]">Fast Delivery</h3>
              <p className="text-gray-600">Receive your order at your doorstep quickly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[#14213d] to-[#000000] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">Subscribe for exclusive deals, Eid offers, and latest updates</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#fca311]"
            />
            <button className="bg-[#fca311] hover:bg-[#e69500] text-[#14213d] px-8 py-4 rounded-lg font-bold transition-colors">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">Join 50,000+ Bangladeshi subscribers. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#14213d]">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Got questions? We've got answers</p>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-[#14213d]">What is your return policy?</h3>
              <p className="text-gray-600">We offer a hassle-free 30-day return policy on all products. If you're not satisfied, simply contact our support team.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-[#14213d]">How long does delivery take in Bangladesh?</h3>
              <p className="text-gray-600">Inside Dhaka: 1-2 days. Outside Dhaka: 3-5 days depending on your district.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-[#14213d]">Which payment methods do you accept?</h3>
              <p className="text-gray-600">We accept bKash, Nagad, Rocket, credit/debit cards, and cash on delivery (COD) for most locations.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-[#14213d]">Do you deliver to all districts in Bangladesh?</h3>
              <p className="text-gray-600">Yes! We deliver to all 64 districts across Bangladesh with varying delivery times.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-[#14213d]">Are my payment details secure?</h3>
              <p className="text-gray-600">Yes! We use industry-standard encryption to protect all payment information. Your security is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Call to Action */}
      <section className="py-20 bg-[#fca311]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-[#14213d]">Ready to Start Shopping?</h2>
          <p className="text-xl text-[#14213d] mb-8">Join thousands of happy customers and discover premium products today</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/items"
              className="bg-[#14213d] hover:bg-[#000000] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/login"
              className="bg-white hover:bg-[#e5e5e5] text-[#14213d] px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Section 12: Trust Badges */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <p className="text-sm font-semibold text-gray-700">Secure Payment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-sm font-semibold text-gray-700">Verified Products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-sm font-semibold text-gray-700">Fast Shipping</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💯</div>
              <p className="text-sm font-semibold text-gray-700">100% Authentic</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
