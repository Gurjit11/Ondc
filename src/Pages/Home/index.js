import React, { useEffect, useState } from "react";
import Category from "../Category";
import ImageCarousel from "../../Components/Carausel";
import { getAllProducts, getProductsByCategory } from "../../API";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // Scroll the window by 600px vertically
    window.scrollTo({
      top: window.screenY + 550,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    setLoading(true);
    getProductsByCategory("smartphones").then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-between bg-gradient-to-r h-[500px] from-black">
        <div className="justify-center flex flex-col p-10">
          <h1 className="text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-white">
            Welcome to Our Ecommerce Store
          </h1>
          <p className="text-white mt-5 text-3xl">
            Discover the best deals on electronics, clothing, home & kitchen,
            and more!
          </p>
          {/* <a href="#popular-products">Popular Products</a> */}
          <div className="grid gap-8 mt-5 items-start justify-start">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button
                onClick={handleClick}
                className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
              >
                <span className="flex items-center space-x-5">
                  <span className="pr-6 text-gray-100">Shop Now</span>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                  See what's new &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2" id="popular-products">
          <ImageCarousel items={items} />
        </div>
      </div>
      <Category />
    </div>
  );
};

export default Home;
