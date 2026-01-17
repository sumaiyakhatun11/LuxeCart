'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#14213d] via-[#000000] to-[#14213d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4"><span className="text-[#e5e5e5]">About</span> <span className="text-[#fca311]">LuxeCart</span></h1>
          <p className="text-xl text-gray-300">Bangladesh's Most Trusted Premium E-Commerce Platform Since 2024</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#14213d]">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                <span className="text-[#fca311] font-bold">LuxeCart</span> was born from a vision to revolutionize online shopping in Bangladesh. 
                We started with a simple mission: to provide authentic, premium quality products with transparent 
                pricing and reliable delivery to every corner of Bangladesh.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                From Dhaka to Chittagong, Sylhet to Rajshahi, we've built trust with over 50,000 Bangladeshi customers 
                who rely on us for their shopping needs. Every product is carefully curated to ensure authenticity and quality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We understand the unique challenges of e-commerce in Bangladesh - from payment preferences (bKash, Nagad) 
                to delivery expectations. That's why we've built a platform that truly serves the Bangladeshi market.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#fca311] to-[#e69500] rounded-2xl shadow-2xl p-8 text-[#14213d]">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">📊 Our Impact</h3>
                <p className="text-sm opacity-80">Making a difference across Bangladesh</p>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-[#14213d]/20">
                  <span className="font-semibold">Bangladeshi Customers</span>
                  <span className="text-4xl font-bold">50K+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#14213d]/20">
                  <span className="font-semibold">Products Delivered</span>
                  <span className="text-4xl font-bold">200K+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#14213d]/20">
                  <span className="font-semibold">Districts Covered</span>
                  <span className="text-4xl font-bold">64</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Customer Satisfaction</span>
                  <span className="text-4xl font-bold">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#14213d]">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#fca311]">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3 text-[#fca311]">Trustworthiness</h3>
              <p className="text-gray-700">We build lasting relationships through honesty, transparency, and authentic products that you can trust.</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#fca311]">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-3 text-[#fca311]">Quality</h3>
              <p className="text-gray-700">Every product undergoes strict quality checks. We never compromise on authenticity or customer experience.</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#fca311]">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-[#fca311]">Innovation</h3>
              <p className="text-gray-700">We continuously evolve with Bangladesh's digital landscape to serve you better every day.</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#fca311]">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-3 text-[#fca311]">Customer Care</h3>
              <p className="text-gray-700">Your satisfaction drives us. We're always here to support and exceed your expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LuxeCart */}
      <section className="py-20 bg-gradient-to-br from-[#14213d] to-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Why <span className="text-[#fca311]">LuxeCart</span>?</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">What makes us Bangladesh's preferred choice</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🇧🇩</div>
              <h3 className="text-xl font-bold mb-3 text-[#fca311]">Made for Bangladesh</h3>
              <p className="text-gray-300">Built specifically for Bangladeshi customers with local payment methods, familiar delivery options, and prices in Taka.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-[#fca311]">100% Authentic</h3>
              <p className="text-gray-300">We guarantee the authenticity of every product. No counterfeits, no compromises on quality.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3 text-[#fca311]">Flexible Payment</h3>
              <p className="text-gray-300">bKash, Nagad, Rocket, cards, or cash on delivery - pay however you prefer.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3 text-[#fca311]">Nationwide Delivery</h3>
              <p className="text-gray-300">From Dhaka to the remotest districts, we deliver everywhere in Bangladesh reliably and on time.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-3 text-[#fca311]">Festival Offers</h3>
              <p className="text-gray-300">Special deals during Eid, Pohela Boishakh, Victory Day, and other important occasions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-[#fca311]">Secure Shopping</h3>
              <p className="text-gray-300">Your data and transactions are protected with bank-level security encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#fca311]/10 to-[#fca311]/5 p-10 rounded-2xl border-l-4 border-[#fca311]">
              <h3 className="text-3xl font-bold mb-4 text-[#14213d]">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower every Bangladeshi with access to premium quality products at fair prices, 
                delivered reliably to their doorstep, while building a trusted ecosystem that supports 
                local businesses and creates opportunities across the nation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#14213d]/10 to-[#14213d]/5 p-10 rounded-2xl border-l-4 border-[#14213d]">
              <h3 className="text-3xl font-bold mb-4 text-[#14213d]">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become Bangladesh's most beloved e-commerce platform by 2030, known for authenticity, 
                reliability, and customer-first service. We envision a digital Bangladesh where everyone 
                can shop with confidence and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#fca311]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#14213d]">Join the LuxeCart Family</h2>
          <p className="text-xl text-[#14213d] mb-8">Experience the future of shopping in Bangladesh</p>
          <a
            href="/items"
            className="inline-block bg-[#14213d] hover:bg-[#000000] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Shopping Now
          </a>
        </div>
      </section>
    </div>
  );
}
