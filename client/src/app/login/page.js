'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Demo credentials
  const DEMO_EMAIL = 'user@example.com';
  const DEMO_PASSWORD = 'password123';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      // Store auth in cookie
      document.cookie = `auth=true; path=/; max-age=86400`;
      document.cookie = `user=${email}; path=/; max-age=86400`;

      // Also update localStorage to help any listeners and other tabs
      try {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', email);
      } catch {}

      // Redirect to items page
      router.push('/items');
    } else {
      setError('Invalid email or password. Use demo credentials below.');
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Store auth in cookie
    document.cookie = `auth=true; path=/; max-age=86400`;
    document.cookie = `user=${DEMO_EMAIL}; path=/; max-age=86400`;

    // Also update localStorage to help any listeners and other tabs
    try {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', DEMO_EMAIL);
    } catch {}

    // Redirect to items page
    router.push('/items');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#14213d] via-[#000000] to-[#14213d] px-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#14213d] mb-2">LuxeCart<span className="text-[#fca311]">.</span></h1>
            <p className="text-gray-600 font-medium">Sign in to your account</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-600 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#fca311] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#fca311] focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#fca311] to-[#e69500] hover:from-[#e69500] hover:to-[#fca311] text-[#14213d] font-semibold py-2.5 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4 font-semibold">Demo Credentials</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 font-medium">Email:</span>
                <code className="text-sm bg-white px-3 py-1.5 rounded border border-blue-200 text-[#fca311] font-mono font-semibold">{DEMO_EMAIL}</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 font-medium">Password:</span>
                <code className="text-sm bg-white px-3 py-1.5 rounded border border-blue-200 text-[#fca311] font-mono font-semibold">{DEMO_PASSWORD}</code>
              </div>
            </div>
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#14213d] to-[#000000] hover:from-[#fca311] hover:to-[#e69500] text-white hover:text-[#14213d] font-semibold py-2.5 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              Quick Demo Login
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            Back to <Link href="/" className="text-[#fca311] hover:text-[#e69500] font-semibold">LuxeCart Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
