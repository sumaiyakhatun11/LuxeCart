'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#14213d] via-[#000000] to-[#14213d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4"><span className="text-[#fca311]">Contact</span> <span className="text-[#e5e5e5]">Us</span></h1>
          <p className="text-xl text-gray-300">We're here to help! Reach out to us anytime</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow border-t-4 border-[#fca311]">
            <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Our Address</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>LuxeCart Bangladesh</strong><br/>
              PUST Campus<br/>
              Pabna Sadar, Pabna<br/>
              Rajshahi Division<br/>
              Bangladesh - 6600
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow border-t-4 border-[#fca311]">
            <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📞</div>
            <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Call Us</h3>
            <p className="text-gray-700 mb-3">
              <strong>Hotline:</strong><br/>
              <a href="tel:+8801704707744" className="text-[#fca311] hover:text-[#14213d] font-semibold text-lg">
                +880 1704-707744
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>বিকাশ পেমেন্ট সাপোর্ট:</strong><br/>
              <span className="text-[#fca311] font-semibold">01704-707744</span>
            </p>
            <p className="text-gray-600 text-sm mt-3">
              <strong>Hours:</strong> 9 AM - 9 PM (Every Day)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow border-t-4 border-[#fca311]">
            <div className="w-16 h-16 bg-[#fca311] rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✉️</div>
            <h3 className="text-2xl font-bold mb-3 text-[#14213d]">Email Us</h3>
            <p className="text-gray-700 mb-3">
              <strong>General Inquiries:</strong><br/>
              <a href="mailto:sumaiyameghla1111@gmail.com" className="text-[#fca311] hover:text-[#14213d] font-semibold break-all">
                sumaiyameghla1111@gmail.com
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-3">
              We respond within 24 hours<br/>
              ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়
            </p>
          </div>
        </div>

        {/* Social Media & Quick Links */}
        <div className="bg-gradient-to-r from-[#fca311] to-[#e69500] rounded-2xl shadow-xl p-8 mb-16 text-[#14213d]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-6">Follow us on social media for exclusive deals and updates</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://web.facebook.com/sumaiyameghla.CSE.PUST/" target="_blank" rel="noopener noreferrer" 
                   className="bg-white hover:bg-[#14213d] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
                  📘 Facebook
                </a>
                <a href="https://www.instagram.com/sumaiyaameghla/" target="_blank" rel="noopener noreferrer"
                   className="bg-white hover:bg-[#14213d] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
                  📷 Instagram
                </a>
                <a href="https://wa.me/8801704707744" target="_blank" rel="noopener noreferrer"
                   className="bg-white hover:bg-[#14213d] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
                  💬 WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/sumaiya-khatun-web/" target="_blank" rel="noopener noreferrer"
                   className="bg-white hover:bg-[#14213d] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
                  💼 LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Support</h3>
              <div className="space-y-3">
                <a href="/items" className="block bg-white hover:bg-[#14213d] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all">
                  🛍️ Browse Products
                </a>
                <a href="/login" className="block bg-white hover:bg-[#14213d] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all">
                  👤 My Account
                </a>
                <a href="/about" className="block bg-white hover:bg-[#14213d] hover:text-white px-4 py-3 rounded-lg font-semibold transition-all">
                  ℹ️ About LuxeCart
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-3 text-center text-[#14213d]">Send Us a Message</h2>
            <p className="text-center text-gray-600 mb-8 text-lg">আমাদের কাছে আপনার বার্তা পাঠান</p>

            {submitted && (
              <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl mb-6 flex items-center gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <p className="font-bold text-lg">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXX-XXXXXX"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="payment">Payment Issue</option>
                  <option value="delivery">Delivery Status</option>
                  <option value="product">Product Question</option>
                  <option value="return">Return/Exchange</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fca311] focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#fca311] to-[#e69500] hover:from-[#14213d] hover:to-[#000000] text-[#14213d] hover:text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gradient-to-br from-[#14213d] to-[#000000] text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <summary className="font-bold text-lg cursor-pointer text-[#fca311]">How can I track my order?</summary>
              <p className="mt-3 text-gray-300">Contact us with your order number via WhatsApp at +880 1704-707744 or email us for real-time tracking updates.</p>
            </details>
            <details className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <summary className="font-bold text-lg cursor-pointer text-[#fca311]">What payment methods do you accept?</summary>
              <p className="mt-3 text-gray-300">We accept bKash, Nagad, Rocket, credit/debit cards, and cash on delivery (COD) for eligible locations.</p>
            </details>
            <details className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <summary className="font-bold text-lg cursor-pointer text-[#fca311]">How long does delivery take?</summary>
              <p className="mt-3 text-gray-300">Inside Dhaka: 1-2 days. Outside Dhaka: 3-5 days depending on your district location.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
