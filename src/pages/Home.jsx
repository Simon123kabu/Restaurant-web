import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaGlassCheers, FaStar } from 'react-icons/fa';
import chefImg from '../assets/chef.jpg'; // Replace with your image
import dish1 from '../assets/dish1.jpg'; // Add your images
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import dish4 from '../assets/dish4.jpg'; 
import dish5 from '../assets/dish5.jpg';
import dish6 from '../assets/dish6.jpg';
import dish7 from '../assets/dish7.jpg';
import dish8 from '../assets/dish8.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  // Chef Data
  const headChef = {
    name: "Chef Marco Pierre",
    bio: "With 20+ years of culinary expertise from Paris to Tokyo, Chef Marco brings world-class flavors to your plate.",
    specialty: "Fusion Cuisine",
    awards: 5
  };

  const kitchenTeam = [
    { name: "Chef Anna", role: "Pastry Chef" },
    { name: "Chef Luis", role: "Grill Master" },
    { name: "Chef Priya", role: "Sous Chef" }
  ];

  // Menu Categories
  const foodCategories = [
    {
      title: "Continental Specialties",
      items: ["Beef Wellington", "Truffle Pasta", "Ratatouille"],
      image: dish1
    },
    {
      title: "Local Delicacies",
      items: ["Jollof Rice", "Egusi Soup", "Suya Skewers"],
      image: dish2
    },
    {
      title: "Appetizers & Snacks",
      items: ["Bruschetta", "Spring Rolls", "Calamari"],
      image: dish3
    },
    {
      title: "Signature Beverages",
      items: ["Tropical Mocktails", "Artisan Cocktails", "Premium Wines"],
      image: dish4
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center justify-center" 
              style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')" }}>
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Gourmet Haven</h1>
          <p className="text-xl mb-8">Where every bite tells a story</p>
          <Link 
            to="/menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition hover-pulse"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Today's Specials Carousel */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Today's Specials</h2>
        
        <Slider
          autoplay={true}
          autoplaySpeed={3000} // 3-second slide duration
          speed={500} // 0.5s transition animation
          infinite={true}
          dots={true}
          arrows={true}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1
              }
            }
          ]}
          className="special-dishes-slider"
        >
          {[
            {
              img: dish5,
              title: "Beef Wellington",
              desc: "Premium cut with mushroom duxelles"
            },
            {
              img: dish6,
              title: "Jollof Rice",
              desc: "West African signature dish"
            },
            {
              img: dish7,
              title: "Truffle Pasta",
              desc: "Handmade pasta with black truffle"
            },
            {
              img: dish8,
              title: "Tropical Mocktail",
              desc: "Fresh mango & passionfruit blend"
            }
          ].map((item, index) => (
            <div key={index} className="px-2 outline-none">
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl h-80 w-full object-cover hover-zoom"
                  style={{ aspectRatio: '1200/800' }} // Enforce aspect ratio
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <button className="mt-2 text-orange-500 hover:text-orange-600 text-sm font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Chef Spotlight */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img src={chefImg} alt="Head Chef" className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Head Chef</h2>
            <h3 className="text-2xl text-orange-500 mb-2">{headChef.name}</h3>
            <div className="flex items-center mb-4">
              {[...Array(headChef.awards)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{headChef.bio}</p>
            <p className="font-semibold">Specialty: {headChef.specialty}</p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Kitchen Team</h4>
              <div className="flex flex-wrap gap-4">
                {kitchenTeam.map((chef, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <h5 className="font-bold">{chef.name}</h5>
                    <p className="text-sm text-gray-600">{chef.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Culinary Offerings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foodCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <FaUtensils className="text-orange-400 mr-2 text-sm" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {category.title.includes("Beverage") && (
                    <div className="mt-4 flex items-center text-blue-500">
                      <FaGlassCheers className="mr-2" />
                      <span>Signature Drinks</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-orange-400 to-orange-600 text-white">
        <h2 className="text-4xl font-bold mb-6">Ready for a Culinary Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Book your table now and experience gastronomic excellence</p>
        <Link to="/reservation" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
          Reserve Now
        </Link>
      </section>
    </div>
  );
};

export default Home;