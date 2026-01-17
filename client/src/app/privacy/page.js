'use client';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Your privacy is important to us</p>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              ShopHub ("we," "us," "our," or "Company") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Personal Data</h3>
                <p className="text-gray-700 mb-2">
                  We may collect personal information that you voluntarily provide to us, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Name and email address</li>
                  <li>Phone number and physical address</li>
                  <li>Payment information (processed securely)</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Automatically Collected Data</h3>
                <p className="text-gray-700 mb-2">
                  When you access our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Browser type and version</li>
                  <li>IP address and device identifier</li>
                  <li>Pages visited and time spent</li>
                  <li>Clickstream data</li>
                  <li>Cookie information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Processing transactions and sending related information</li>
              <li>Sending promotional communications (with your consent)</li>
              <li>Improving and personalizing your experience</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Detecting and preventing fraudulent transactions</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information to third parties. We may share your information only:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 mt-4">
              <li>With service providers who assist in our operations (under confidentiality agreements)</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights and safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (in certain jurisdictions)</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies to enhance your experience on our website. For detailed information about 
              our cookie policy, please see our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:privacy@shophub.com" className="text-blue-600 hover:underline">privacy@shophub.com</a></p>
              <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by updating the "Last Updated" date at the top of this policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
