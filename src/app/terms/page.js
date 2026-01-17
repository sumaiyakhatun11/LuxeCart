'use client';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl">Please read our terms carefully before using our service</p>
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

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the ShopHub website and services, you accept and agree to be bound 
              by the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) 
              on ShopHub for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software</li>
              <li>Transferring the materials to another person or "mirroring" on any other server</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Committing any act that we deem to be a violation of these terms</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on ShopHub's website are provided on an 'as is' basis. ShopHub makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including, without limitation, implied warranties or conditions of merchantability, fitness 
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Limitations of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall ShopHub or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or 
              inability to use the materials on ShopHub's website.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account with ShopHub, you must:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Immediately notify us of unauthorized use</li>
              <li>Not impersonate any other person or entity</li>
            </ul>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. User Content</h2>
            <p className="text-gray-700 leading-relaxed">
              You retain all rights to any content you submit, post or display on or through ShopHub. 
              By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to 
              use, copy, reproduce, process, adapt, modify, publish, and distribute such content.
            </p>
          </section>

          {/* Prohibited Conduct */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Prohibited Conduct</h2>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, threaten, defame, or abuse others</li>
              <li>Introduce viruses or malicious code</li>
              <li>Spam or send unsolicited communications</li>
              <li>Engage in any form of fraud or deception</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          {/* Product Information */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">8. Product Information</h2>
            <p className="text-gray-700 leading-relaxed">
              ShopHub attempts to be as accurate as possible. However, we do not warrant that product 
              descriptions, pricing, or other content on our website is accurate, complete, reliable, 
              current, or error-free. We reserve the right to correct any errors or omissions.
            </p>
          </section>

          {/* Pricing and Availability */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">9. Pricing and Availability</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to limit quantities</li>
              <li>We reserve the right to discontinue any product</li>
              <li>Availability is subject to supplier stock</li>
            </ul>
          </section>

          {/* Modification of Terms */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">10. Modification of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              ShopHub may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these 
              terms of service.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of 
              the United States, and you irrevocably submit to the exclusive jurisdiction of the courts 
              located in New York.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:legal@shophub.com" className="text-blue-600 hover:underline">legal@shophub.com</a></p>
              <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
