

"use client";

import Navbar from '@/app/component/Navbar/page';
import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Cardpage = () => {
    const courses = [
        {
          title: "Short Sleeve T-shirts",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
          image: "/image/cards-1.jpeg", // Replace with actual image path
          price: 5000,
          discount: 50, // Discounted amount
        },
        {
          title: "Short Sleeve T-shirts",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
          image: "/image/cards-1.jpeg", // Replace with actual image path
          price: 6000,
          discount: 60, // Discounted amount
        },
      ];
  return (
    <div className="card">
        <Navbar/>
    <div className='cardContainer'>
      <div className='cardHeader'>
        <h2>Your Cart</h2>
      </div>

      <div className='cardContent'>
        <div className='cardRowHeader'>
          <p className='courseImage'>Tshirt</p>
          <p className='courseDetails'>Details</p>
          <p className='coursePrice'>Price</p>
          <p className='courseDiscount'>Discount</p>
          <p className='courseTotal'>Total</p>
        </div>

        {/* Mapping over the courses array */}
        {courses.map((course, index) => {
          const totalPrice = course.price - course.discount;
          return (
            <div className='cardRow' key={index}>
              <div className='courseImage'>
                <img
                  src={course.image}
                  width={200}
                  height={200}
                  alt={`Course Image for ${course.title}`}
                />
              </div>
              <p className='courseDetails'>
                <h2>{course.title}</h2>
                <div className="rating">
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                {course.details}</p>
              <p className='coursePrice'>₹{course.price}</p>
              <p className='courseDiscount'>₹{course.discount}</p>
              <p className='courseTotal'>₹{totalPrice}</p>
            </div>
          );
        })}
      </div>
    </div>
   
  </div>
  )
}

export default Cardpage