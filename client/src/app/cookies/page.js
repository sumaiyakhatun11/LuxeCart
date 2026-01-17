'use client';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl">How we use cookies on ShopHub</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Last Updated */}
          <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded">
            <p className="text-gray-700">
              <strong>Last Updated:</strong> January 16, 2026
            </p>
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small data files that are stored on your browser or device. They help us provide 
              you with a better experience when you visit ShopHub. Some cookies are necessary for basic 
              site functionality, while others help us understand how you use our site and improve our services.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function properly. They enable:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>User authentication and login sessions</li>
                  <li>Security and fraud prevention</li>
                  <li>Basic navigation functionality</li>
                  <li>Shopping cart functionality</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how you use our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Pages you visit and time spent</li>
                  <li>Click patterns and navigation flow</li>
                  <li>Search queries and product views</li>
                  <li>Device and browser information</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Marketing Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us deliver personalized advertisements:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Personalized product recommendations</li>
                  <li>Targeted advertisements</li>
                  <li>Retargeting campaigns</li>
                  <li>Social media integration</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Preference Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies remember your preferences:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Language and location settings</li>
                  <li>Display preferences</li>
                  <li>Account preferences</li>
                  <li>Previous searches and views</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Duration */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. Cookie Duration</h2>
            <div className="bg-gray-50 p-4 rounded">
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Stored for a specified period (typically 1-12 months)
                </li>
                <li>
                  <strong>Authentication Cookies:</strong> Remain until logout (max 24 hours)
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with trusted third-party service providers who may place cookies on your device:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li><strong>Google Analytics:</strong> Helps us understand website usage patterns</li>
              <li><strong>Payment Processors:</strong> Facilitate secure transactions</li>
              <li><strong>Social Media Platforms:</strong> Enable social sharing features</li>
              <li><strong>Advertising Partners:</strong> Deliver targeted advertisements</li>
            </ul>
          </section>

          {/* How to Control Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. How to Control Cookies</h2>
            <p className="text-gray-700 mb-4">
              You have the right to accept or reject cookies. Here's how:
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-semibold text-gray-800 mb-2">Browser Settings</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Most browsers allow you to control cookies through their settings:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm ml-2 space-y-1">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Preferences → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Edge: Settings → Privacy → Cookies</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-semibold text-gray-800 mb-2">Cookie Management Tools</h3>
                <p className="text-gray-700 text-sm">
                  Visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline">www.aboutcookies.org</a> for comprehensive 
                  information on managing cookies across different browsers.
                </p>
              </div>
            </div>
          </section>

          {/* Consequences of Disabling */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Consequences of Disabling Cookies</h2>
            <p className="text-gray-700 mb-4">
              While you can disable cookies, please note that this may affect your experience on our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Authentication features may not work properly</li>
              <li>Shopping cart may not function correctly</li>
              <li>Personalized features will be limited</li>
              <li>You may need to re-enter information on each visit</li>
            </ul>
          </section>

          {/* Consent */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Your Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By continuing to use ShopHub, you consent to our use of cookies as described in this policy. 
              If you do not agree with our cookie practices, please disable cookies in your browser settings.
            </p>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or 
              for other operational, legal, or regulatory reasons. We will notify you of any material changes 
              by updating the "Last Updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:privacy@shophub.com" className="text-blue-600 hover:underline">privacy@shophub.com</a></p>
              <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>

          {/* Cookie Reference Table */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Appendix: Cookie Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">auth</td>
                    <td className="border border-gray-300 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                    <td className="border border-gray-300 px-4 py-2">User authentication</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">user</td>
                    <td className="border border-gray-300 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                    <td className="border border-gray-300 px-4 py-2">User information</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics tracking</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">user_prefs</td>
                    <td className="border border-gray-300 px-4 py-2">Preference</td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                    <td className="border border-gray-300 px-4 py-2">User preferences</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
