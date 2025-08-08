// components/MinimalFooter.jsx
'use client'
import { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e:any ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e :any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <footer className="bg-stone-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact us</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Email</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>info@restaurant.com</p>
                  <p>reservations@restaurant.com</p>
                </div>
              </div>

              {/* Phone Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Phone</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>(555) 123-4567</p>
                </div>
              </div>

              {/* Address Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Address</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>123 Gourmet Street</p>
                  <p>Food District, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Office</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Restaurant: Daily 5PM - 11PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-6">Write us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-colors"
                  placeholder=""
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-colors"
                  placeholder=""
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-3 bg-white border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 resize-none transition-colors"
                  placeholder=""
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-300 hover:bg-amber-500 text-white text-sm font-medium py-3 px-6 rounded-md transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold text-gray-900">
                Restaurant
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Menu
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Reservations
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              © 2025 Restaurant All rights reserved.SADIA SALEEM
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}