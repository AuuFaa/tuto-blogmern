import React from 'react';

import {images} from "../constants";
import { AiOutlineTwitter , AiFillYoutube , AiFillInstagram } from 'react-icons/ai';
import {FaFacebook} from "react-icons/fa";
import {BsTelegram} from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10">
        <div className="col-span-5">
          <h3 className="text-dark-light font-bold ">Product</h3>
          <ul className="text-[#959ead] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10">
          <img src={images.Logo} alt="logo" className="brightness-0 invert mx-auto"/>
          <p className="text-sm text-dark-light text-center">Build a modern and creative website with crealand</p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 ">
            <li><a href="/"> <AiOutlineTwitter className="w-6 h-auto" /> </a></li>
            <li><a href="/"> <AiFillInstagram className="w-6 h-auto" /> </a></li>
            <li><a href="/"> <FaFacebook className="w-6 h-auto" /> </a></li>
            <li><a href="/"> <AiFillYoutube className="w-6 h-auto" /> </a></li>
            <li><a href="/"> <BsTelegram className="w-6 h-auto" /> </a></li>

          </ul>
        </div>

      </footer>

    </section>
  );
};

export default Footer;