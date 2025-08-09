import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus, FaMinus, FaUtensils, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';


const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeItem,
    tableNumber,
    setTableNumber,
    specialRequests,
    setSpecialRequests,
    clearCart, // Add clearCart from context
  } = useCart();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: 50,
      transition: { duration: 0.2 }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Submit order
  const handleSubmit = () => {
    if (!tableNumber) {
      alert('Please enter your table number');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      clearCart(); // Clear cart, table number, and special requests
    }, 1500);
  };

  // Reset submitSuccess after 3 seconds
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/menu" 
            className="flex items-center text-orange-600 hover:text-orange-700 transition"
          >
            <FaArrowLeft className="mr-2" />
            Back to Menu
          </Link>
          <h1 className="text-3xl font-bold text-orange-600">Your Order</h1>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>

        {cart.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-lg shadow text-center"
          >
            <p className="text-gray-600 mb-4">Your cart is currently empty</p>
            <Link 
              to="/menu" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition transform hover:scale-105"
            >
              Browse Menu
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Table Number Input */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-lg shadow-md mb-6"
            >
              <label className="block text-gray-700 font-medium mb-2">
                <FaUtensils className="inline mr-2 text-orange-500" />
                Table Number
              </label>
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Enter your table number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </motion.div>

            {/* Special Requests */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-5 rounded-lg shadow-md mb-6"
            >
              <label className="block text-gray-700 font-medium mb-2">
                Special Requests
              </label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Allergies, dietary restrictions, etc."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-[100px]"
              />
            </motion.div>

            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="border-b border-gray-100 last:border-0"
                  >
                    <div className="p-4 flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                        <p className="text-orange-600 font-medium">${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-orange-500 hover:text-orange-700 transition p-1"
                        >
                          <FaMinus />
                        </button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-orange-500 hover:text-orange-700 transition p-1"
                        >
                          <FaPlus />
                        </button>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition p-1 ml-4"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-5 rounded-lg shadow-md mb-6"
            >
              <h3 className="font-bold text-lg mb-4">Order Summary</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || submitSuccess}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white transition ${isSubmitting || submitSuccess ? 'bg-green-500' : 'bg-orange-600 hover:bg-orange-700'} flex items-center justify-center`}
              >
                {isSubmitting ? (
                  'Processing...'
                ) : submitSuccess ? (
                  'Order Sent Successfully!'
                ) : (
                  'Submit Order'
                )}
              </button>

              {/* Success Message */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-center"
                  >
                    Your order has been sent to the kitchen! 
                    <br />
                    Table {tableNumber} will be served shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;