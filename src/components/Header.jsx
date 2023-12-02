import React, { useState } from 'react';
import { images } from '../constants';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";



export default function Header() {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) =>{
      return !curState;
    });
  };

  return (
    <section>
    <header className="container mx-auto px-5 py-3 ">
      <div className='flex justify-between  items-center  p-3'>
      <div className="w-16"><img src={images.Logo} alt="logo" /></div>
      <div className="lg:hidden z-50">
        {navIsVisible ? <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler}/> : <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler}/>}
      </div>
      <div className={`${navIsVisible ? "right-0" : "-right-full"} transition duration-300 mt-[100px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-5 items-center `} >
      <ul className='text-white lg:text-dark-soft flex flex-col lg:flex-row gap-x-5 font-semibold'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Articles</a></li>
          <li><a href="/">Pages</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Faq</a></li>
        </ul>
        <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign In</button>
      </div>

      </div>
    </header>
  </section>
  )
};





