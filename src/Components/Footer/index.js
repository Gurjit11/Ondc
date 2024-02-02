import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center w-full mt-10">
      <div className="bg-blue-400 text-white rounded-t-2xl pt-4 md:pl-16 w-full">
        <div className="grid sm:grid-cols-2 w-full">
          <div className="p-4 ">
            <div className="grid grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold">Support</h2>
                <ul>
                  <li className="text-sm font-light">Help</li>
                  <li className="text-sm font-light">Contact Us</li>
                  <li className="text-sm font-light">API Status</li>
                  <li className="text-sm font-light overflow-hidden">
                    Documentation
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Info</h2>
                <ul>
                  <li className="text-sm font-light">About Us</li>
                  <li className="text-sm font-light">Career</li>
                  <li className="text-sm font-light">Invest</li>
                  <li className="text-sm font-light">Legal</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center">
            <p className="text-sm font-bold text-center m-1">
              Sign Up for Crypto News
            </p>
            <form className="">
              <input
                className="bg-white-900 text-black rounded-lg shadow-md outline-white p-1 my-2 w-[150px]"
                type="email"
                placeholder="Enter your email"
              />
              <button className="text-sm px-3 py-2 font-semibold bg-blue-500 text-white rounded-2xl ml-1 hover:scale-105 ">
                SignUp
              </button>
            </form>
            <div className="flex justify-around w-[50%] mt-2 text-xl cursor-pointer">
              <AiOutlineInstagram />
              <FaTwitter />
              <FaFacebookF />
              <FaGithub />
            </div>
          </div>
        </div>
        <p className="text-center text-xs py-4">Powered by Coin Gecko</p>
      </div>
    </div>
  );
};

export default Footer;
