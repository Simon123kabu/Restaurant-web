import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: 'morning',
    people: 1,
    requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: 'morning',
        people: 1,
        requests: ''
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center text-orange-600 hover:text-orange-700 transition"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-orange-600">Make a Reservation</h1>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          {submitSuccess ? (
            <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg mb-4">
              Reservation submitted successfully! We'll contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Reservation Date</label>
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  min={new Date().toISOString().split('T')[0]} // Prevent past dates
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required 
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 10PM)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Number of People</label>
                <input 
                  type="number" 
                  name="people" 
                  value={formData.people} 
                  onChange={handleChange} 
                  min="1" 
                  max="20" // Arbitrary max
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required 
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
                <textarea 
                  name="requests" 
                  value={formData.requests} 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
                  placeholder="Any allergies, preferences, or special occasions?"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white transition ${isSubmitting ? 'bg-orange-400' : 'bg-orange-600 hover:bg-orange-700'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;