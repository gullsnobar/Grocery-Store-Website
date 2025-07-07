import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/Logo-new.png'; 

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log('Login submitted:', loginData);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* ✅ Updated form container styling */}
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="PickBazar Logo" className="h-7 w-auto" />
          </div>

          <h2 className="text-gray-600 text-lg font-medium italic">
            Login to dashboard
          </h2>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                placeholder=""
                value={loginData.email}
                onChange={handleLoginChange}
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-500">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                  placeholder=""
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
            >
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="text-sm text-gray-500">
              Or
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don't have any account?{' '}
              <a href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500 underline">
                Register as Shop Owner
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
