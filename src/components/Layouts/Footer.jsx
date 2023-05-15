import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black cursor-default'>Streamsss</h1>
        <p className='py-4 text-red-600 cursor-default'> We bring great ideas to life!</p>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-black cursor-default'>Quick Links</h6>
          <ul>
          <Link to={"/"}><li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Home</li></Link>
          <Link to={"/about"}><li className='py-2 text-sm hover:text-red-600 cursor-pointer'>About us</li></Link>
          <Link to={"/service"}><li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Services</li></Link>
            <li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Contact us</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black cursor-default'>Our Services</h6>
          <ul>
            <li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Human Resource Consultation</li>
            <li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Software Development</li>
            <li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Training and Deployment</li>
            <li className='py-2 text-sm hover:text-red-600 cursor-pointer'>Resume Writing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
