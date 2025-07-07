import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-new.png';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = () => {
    console.log('Signup submitted:', signupData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="PickBazar Logo" className="h-7 w-auto" />
          </div>
          <h2 className="text-gray-600 text-lg font-medium italic">
            Register new account
          </h2>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-md"
                value={signupData.name}
                onChange={handleSignupChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-md"
                value={signupData.email}
                onChange={handleSignupChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-300 rounded-md"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSignup}
              className="w-full py-3 px-4 rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-600 hover:text-emerald-500 underline">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
