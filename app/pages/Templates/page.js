"use client";

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

import Link from "next/link";
import Navbar from "@/app/component/Navbar/page";

const FilterImages = () => {

  const [openFilter, setOpenFilter] = useState("trending"); 

  const toggleFilter = (filterName) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  const handleMoveDetails = () => {
    // Handle click event for each image (e.g., redirect to a details page)
  };

  const collections = [
    { id: 1, image: "/image/front_medium2.png", title: "Short Sleeve T-shirts" },
    { id: 2, image: "/image/front_medium3.png", title: "Short Sleeve T-shirts" },
    { id: 3, image: "/image/front_medium4.png", title: "Short Sleeve T-shirts" },
    { id: 4, image: "/image/front_medium2.png", title: "Short Sleeve T-shirts" },
    { id: 5, image: "/image/front_medium3.png", title: "Short Sleeve T-shirts" },
    { id: 6, image: "/image/front_medium4.png", title: "Short Sleeve T-shirts" },
    { id: 7, image: "/image/front_medium2.png", title: "Short Sleeve T-shirts" },
    { id: 8, image: "/image/front_medium3.png", title: "Short Sleeve T-shirts" },
    { id: 9, image: "/image/front_medium4.png", title: "Short Sleeve T-shirts" },
    { id: 10, image: "/image/front_medium2.png", title: "Short Sleeve T-shirts" },
    { id: 11, image: "/image/front_medium3.png", title: "Short Sleeve T-shirts" },
    { id: 12, image: "/image/front_medium4.png", title: "Short Sleeve T-shirts" },
  ];

  return (
    <div className="templates">
      <Navbar/>
      <div className="templatesContainer">
        <div className="templatesContent">
          <div className="templatesFilter">
            {/* Trending Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("trending")}
                htmlFor="trending"
              >
                Trending <span>{openFilter === "trending" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "trending" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Short Sleeve T-shirts</label></li>
                    <li><label>Long Sleeve T-shirts</label></li>
                    <li><label>Soft Tri Blend T-shirts</label></li>
                    <li><label>Performance Shirts</label></li>
                    <li><label>Women’s T-Shirts</label></li>
                    <li><label>Kids T-Shirts</label></li>
                    <li><label>Tie Dye T-Shirts</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* School Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("school")}
                htmlFor="school"
              >
                K-12 School <span>{openFilter === "school" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "school" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>School Spirit</label></li>
                    <li><label>Future Leaders</label></li>
                    <li><label>Classroom Vibes</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sports Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("sports")}
                htmlFor="sports"
              >
                Sports <span>{openFilter === "sports" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "sports" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Game On</label></li>
                    <li><label>Victory Wear</label></li>
                    <li><label>Classroom Vibes</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Parties & Events Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("parties")}
                htmlFor="parties"
              >
                Parties & Events <span>{openFilter === "parties" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "parties" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Celebration Mode</label></li>
                    <li><label>Event Ready</label></li>
                    <li><label>Party Essentials</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Business Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("business")}
                htmlFor="business"
              >
                Business <span>{openFilter === "business" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "business" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Corporate Edge</label></li>
                    <li><label>Professional Pulse</label></li>
                    <li><label>Executive Wear</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Charities & Fundraisers Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("charities")}
                htmlFor="charities"
              >
                Charities & Fundraisers <span>{openFilter === "charities" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "charities" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Heartfelt Support</label></li>
                    <li><label>Giving Back</label></li>
                    <li><label>Cause Champion</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Holidays & Seasons Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("holidays")}
                htmlFor="holidays"
              >
                Holidays & Seasons <span>{openFilter === "holidays" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "holidays" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Holiday Joy</label></li>
                    <li><label>Seasonal Spirit</label></li>
                    <li><label>Festive Cheer</label></li>
                  </ul>
                </div>
              )}
            </div>

            {/* College Filters */}
            <div className="templateFilterGroup">
              <label
                className="templateFilterName"
                onClick={() => toggleFilter("college")}
                htmlFor="college"
              >
                College <span>{openFilter === "college" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </label>
              {openFilter === "college" && (
                <div className="templateCustomSelect">
                  <ul className="templateDropdown">
                    <li><label>Campus Life</label></li>
                    <li><label>College Crew</label></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="templateCards">
            <div className="templateCardsContent">
              {collections.map((e) => (
                <div key={e.id} className="templatecardItem" onClick={handleMoveDetails}>
                  <Image src={e.image} alt={e.title} width={300} height={200} className="templatecardImage" />
                  <div className="templateSliderContent">
                    <Link href="/pages/Menu">
                      <div className="templateCardInfo">
                          <p>{e.title}</p>
                        {/* <p>{e.title}</p> */}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterImages;
