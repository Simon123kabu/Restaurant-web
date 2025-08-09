import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaCartPlus, FaUtensils, FaGlassMartiniAlt, FaIceCream, FaBreadSlice, FaLeaf, FaFish } from 'react-icons/fa';

const Menu = () => {
  // State for active category and cart
  const [activeCategory, setActiveCategory] = useState('continental');
  const [cart, setCart] = useState([]);

  // Menu data with 7 categories
  const menuCategories = {
    continental: {
      title: "Continental Dishes",
      icon: <FaUtensils className="mr-2" />,
      items: [
        { id: 1, name: "Beef Wellington", price: "$28.99", description: "Prime beef with mushroom duxelles" },
        { id: 2, name: "Truffle Pasta", price: "$22.50", description: "Handmade pasta with black truffle" },
        { id: 3, name: "Ratatouille", price: "$18.75", description: "Provençal vegetable stew" },
        { id: 4, name: "Chicken Cordon Bleu", price: "$24.99", description: "Stuffed with ham and cheese" },
        { id: 5, name: "Bouillabaisse", price: "$26.50", description: "French seafood stew" },
        { id: 6, name: "Wiener Schnitzel", price: "$23.25", description: "Breaded veal cutlet" },
        { id: 7, name: "Paella Valenciana", price: "$25.99", description: "Spanish saffron rice dish" },
        { id: 8, name: "Coq au Vin", price: "$22.75", description: "Chicken braised with wine" },
        { id: 9, name: "Moussaka", price: "$19.99", description: "Greek eggplant casserole" },
        { id: 10, name: "Beef Bourguignon", price: "$27.50", description: "Red wine beef stew" }
      ]
    },
    local: {
      title: "Local Delicacies",
      icon: <FaBreadSlice className="mr-2" />,
      items: [
        { id: 11, name: "Jollof Rice", price: "$15.99", description: "West African spiced rice" },
        { id: 12, name: "Egusi Soup", price: "$14.50", description: "Melon seed soup with greens" },
        { id: 13, name: "Suya Skewers", price: "$12.99", description: "Spiced grilled meat skewers" },
        { id: 14, name: "Pounded Yam", price: "$13.75", description: "Served with egusi or okra soup" },
        { id: 15, name: "Pepper Soup", price: "$11.99", description: "Spicy broth with goat meat" },
        { id: 16, name: "Akara", price: "$8.50", description: "Fried bean cakes" },
        { id: 17, name: "Moin Moin", price: "$9.25", description: "Steamed bean pudding" },
        { id: 18, name: "Amala", price: "$12.99", description: "Yam flour served with ewedu" },
        { id: 19, name: "Ofada Rice", price: "$16.50", description: "Local rice with special sauce" },
        { id: 20, name: "Boli", price: "$7.99", description: "Roasted plantain with fish" }
      ]
    },
    appetizers: {
      title: "Appetizers & Starters",
      icon: <FaLeaf className="mr-2" />,
      items: [
        { id: 21, name: "Bruschetta", price: "$9.99", description: "Toasted bread with tomato" },
        { id: 22, name: "Spring Rolls", price: "$8.50", description: "Crispy vegetable rolls" },
        { id: 23, name: "Calamari", price: "$12.75", description: "Fried squid rings" },
        { id: 24, name: "Stuffed Mushrooms", price: "$10.99", description: "With cheese and herbs" },
        { id: 25, name: "Shrimp Cocktail", price: "$14.50", description: "Chilled shrimp with sauce" },
        { id: 26, name: "Caprese Salad", price: "$11.25", description: "Tomato, mozzarella, basil" },
        { id: 27, name: "Chicken Wings", price: "$10.99", description: "Buffalo or BBQ style" },
        { id: 28, name: "Nachos", price: "$9.50", description: "With cheese and jalapeños" },
        { id: 29, name: "Hummus Platter", price: "$8.99", description: "With pita bread" },
        { id: 30, name: "Tuna Tartare", price: "$15.75", description: "Fresh tuna with avocado" }
      ]
    },
    desserts: {
      title: "Desserts",
      icon: <FaIceCream className="mr-2" />,
      items: [
        { id: 31, name: "Tiramisu", price: "$8.99", description: "Coffee-flavored Italian dessert" },
        { id: 32, name: "Chocolate Lava Cake", price: "$9.50", description: "With vanilla ice cream" },
        { id: 33, name: "Crème Brûlée", price: "$8.75", description: "Classic French custard" },
        { id: 34, name: "Cheesecake", price: "$7.99", description: "New York style" },
        { id: 35, name: "Apple Pie", price: "$7.50", description: "With cinnamon ice cream" },
        { id: 36, name: "Panna Cotta", price: "$8.25", description: "Italian cream dessert" },
        { id: 37, name: "Mango Sticky Rice", price: "$9.99", description: "Thai specialty" },
        { id: 38, name: "Baklava", price: "$6.50", description: "Layered pastry with nuts" },
        { id: 39, name: "Profiteroles", price: "$8.99", description: "Cream puffs with chocolate" },
        { id: 40, name: "Sorbet Trio", price: "$7.75", description: "Seasonal fruit sorbets" }
      ]
    },
    beverages: {
      title: "Beverages",
      icon: <FaGlassMartiniAlt className="mr-2" />,
      items: [
        { id: 41, name: "Tropical Mocktail", price: "$6.99", description: "Mango-pineapple blend" },
        { id: 42, name: "Signature Mojito", price: "$9.50", description: "Mint lime cocktail" },
        { id: 43, name: "Craft Beer", price: "$7.25", description: "Local brewery selection" },
        { id: 44, name: "Wine Selection", price: "$8.99", description: "Red/white by glass" },
        { id: 45, name: "Iced Coffee", price: "$5.50", description: "Vietnamese style" },
        { id: 46, name: "Fresh Juices", price: "$4.99", description: "Seasonal fruits" },
        { id: 47, name: "Sparkling Water", price: "$3.75", description: "Imported or local" },
        { id: 48, name: "Herbal Teas", price: "$4.50", description: "Various flavors" },
        { id: 49, name: "Milkshakes", price: "$6.99", description: "Chocolate/vanilla/strawberry" },
        { id: 50, name: "Espresso", price: "$3.99", description: "Single or double shot" }
      ]
    },
    seafood: {
      title: "Seafood Specials",
      icon: <FaFish className="mr-2" />,
      items: [
        { id: 51, name: "Grilled Lobster", price: "$32.99", description: "With garlic butter" },
        { id: 52, name: "Seafood Platter", price: "$28.50", description: "Mixed grill for two" },
        { id: 53, name: "Salmon Teriyaki", price: "$24.75", description: "With jasmine rice" },
        { id: 54, name: "Shrimp Scampi", price: "$22.99", description: "Garlic white wine sauce" },
        { id: 55, name: "Crab Cakes", price: "$18.50", description: "Maryland style" },
        { id: 56, name: "Mussels Marinara", price: "$16.99", description: "In tomato broth" },
        { id: 57, name: "Fish & Chips", price: "$15.75", description: "Beer-battered cod" },
        { id: 58, name: "Tuna Steak", price: "$26.50", description: "Sesame crusted" },
        { id: 59, name: "Oysters Rockefeller", price: "$21.99", description: "Baked with spinach" },
        { id: 60, name: "Cioppino", price: "$25.75", description: "Italian seafood stew" }
      ]
    },
    vegetarian: {
      title: "Vegetarian Options",
      icon: <FaLeaf className="mr-2" />,
      items: [
        { id: 61, name: "Mushroom Risotto", price: "$18.99", description: "Creamy arborio rice" },
        { id: 62, name: "Stuffed Bell Peppers", price: "$16.50", description: "With quinoa and cheese" },
        { id: 63, name: "Eggplant Parmesan", price: "$17.75", description: "Breaded and baked" },
        { id: 64, name: "Vegetable Curry", price: "$15.99", description: "Coconut milk base" },
        { id: 65, name: "Falafel Plate", price: "$14.50", description: "With tahini sauce" },
        { id: 66, name: "Spinach Lasagna", price: "$16.99", description: "Layered with ricotta" },
        { id: 67, name: "Veggie Burger", price: "$13.75", description: "House-made patty" },
        { id: 68, name: "Zucchini Noodles", price: "$15.50", description: "With pesto sauce" },
        { id: 69, name: "Stuffed Portobello", price: "$17.99", description: "With goat cheese" },
        { id: 70, name: "Tofu Stir Fry", price: "$16.25", description: "With seasonal vegetables" }
      ]
    }
  };

  // Add to cart function
  const addToCart = (item) => {
    setCart([...cart, item]);
    // In a real app, you'd use Redux/Context for cart management
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-8 text-center">Our Menu</h1>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center whitespace-nowrap px-4 py-2 mr-2 rounded-full transition ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {menuCategories[category].icon}
              {menuCategories[category].title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories[activeCategory].items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-orange-500">{item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm transition"
                  >
                    <FaCartPlus className="mr-1" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary (Fixed at bottom on mobile) */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-lg p-3">
          <Link to="/cart" className="flex justify-between items-center">
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
            <span className="font-medium ml-2">View Cart</span>
            <span className="ml-auto font-bold">
              ${cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;