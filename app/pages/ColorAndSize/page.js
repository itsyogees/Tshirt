"use client";

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar/page";

const ColorSize = () => {
  const [openFilter, setOpenFilter] = useState("shirt");

  const toggleFilter = (filterName) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  // const handleMoveDetails = () => {
  //   // Handle click event for each image (e.g., redirect to a details page)
  // };

  const collections = [
    {
      id: 1,
      image: "/image/front_medium4.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 2,
      image: "/image/front_medium3.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 3,
      image: "/image/front_medium1.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 4,
      image: "/image/front_medium4.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 5,
      image: "/image/front_medium3.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 6,
      image: "/image/front_medium1.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 7,
      image: "/image/front_medium4.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 8,
      image: "/image/front_medium3.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 9,
      image: "/image/front_medium1.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 10,
      image: "/image/front_medium4.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 11,
      image: "/image/front_medium3.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
    {
      id: 12,
      image: "/image/front_medium1.png",
      title: "Short Sleeve T-shirts",
      rating: "4.5",
      ratingInfo: "(4213)",
      size: "YS-5XL - Also in Women’s",
      price: "$399",
      discount: "$499",
      buy: "Add to Cart",
    },
  ];

  const colors = [
    "#FFC1C1",
    "#C7D2FF",
    "#C5FFCF",
    "#BBC4FF",
    "#FFE8C9",
    "#FF8CF0",
    "#FFB541",
    "#2FA1FF",
    "#0A048E",
    "#D56CFF",
    "#D9D9D9",
  ];

  return (
    <div className="categories">
      <Navbar />
      <div className="categoriesContainer">
        <div className="categoriesContent">
          <div className="categoriesFilter">
            {/* T-Shirt Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("shirt")}
                htmlFor="shirt"
              >
                T-shirt{" "}
                <span>
                  {openFilter === "shirt" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "shirt" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Graphic T-Shirt</label>
                    </li>
                    <li>
                      <label>Plain T-Shirt</label>
                    </li>
                    <li>
                      <label>Polo T-Shirt</label>
                    </li>
                    <li>
                      <label>V-Neck T-Shirt</label>
                    </li>
                    <li>
                      <label>Henley T-Shirt</label>
                    </li>
                    <li>
                      <label>Long Sleeve T-Shirt</label>
                    </li>
                    <li>
                      <label>Sleeveless T-Shirt</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Colors Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("colors")}
                htmlFor="colors"
              >
                Colors{" "}
                <span>
                  {openFilter === "colors" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "colors" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Black</label>
                    </li>
                    <li>
                      <label>White</label>
                    </li>
                    <li>
                      <label>Blue</label>
                    </li>
                    <li>
                      <label>Red</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sizes Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("sizes")}
                htmlFor="sizes"
              >
                Sizes{" "}
                <span>
                  {openFilter === "sizes" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "sizes" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Small</label>
                    </li>
                    <li>
                      <label>Medium</label>
                    </li>
                    <li>
                      <label>Large</label>
                    </li>
                    <li>
                      <label>Extra Large</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Price Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("price")}
                htmlFor="price"
              >
                Price{" "}
                <span>
                  {openFilter === "price" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "price" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Under $100</label>
                    </li>
                    <li>
                      <label>$100 - $200</label>
                    </li>
                    <li>
                      <label>$200 - $300</label>
                    </li>
                    <li>
                      <label>Above $400</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Neckline Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("neckline")}
                htmlFor="neckline"
              >
                Neckline{" "}
                <span>
                  {openFilter === "neckline" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "neckline" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Round Neck</label>
                    </li>
                    <li>
                      <label>Collared</label>
                    </li>
                    <li>
                      <label>V-Neck</label>
                    </li>
                    <li>
                      <label>Crew Neck</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Brands Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("brands")}
                htmlFor="brands"
              >
                Brands{" "}
                <span>
                  {openFilter === "brands" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "brands" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Nike</label>
                    </li>
                    <li>
                      <label>Adidas</label>
                    </li>
                    <li>
                      <label>Zara</label>
                    </li>
                    <li>
                      <label>Uniqlo</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Material Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("material")}
                htmlFor="material"
              >
                Material{" "}
                <span>
                  {openFilter === "material" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "material" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Cotton</label>
                    </li>
                    <li>
                      <label>Polyester</label>
                    </li>
                    <li>
                      <label>Linen</label>
                    </li>
                    <li>
                      <label>Wool</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Type Filters */}
            <div className="categoriesFilterGroup">
              <label
                className="categoriesFilterName"
                onClick={() => toggleFilter("type")}
                htmlFor="type"
              >
                Type{" "}
                <span>
                  {openFilter === "type" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </label>
              {openFilter === "type" && (
                <div className="categoriesCustomSelect">
                  <ul className="categoriesDropdown">
                    <li>
                      <label>Casual</label>
                    </li>
                    <li>
                      <label>Formal</label>
                    </li>
                    <li>
                      <label>Sports</label>
                    </li>
                    <li>
                      <label>Slim Fit</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="categoriesCards">
            <div className="categoriesCardsContent">
          
              {collections.map((e) => (
                <div key={e.id} className="categoriesCardItem">
                      <Link href='/pages/Ordering'>
                  <Image
                    src={e.image}
                    alt={e.title}
                    width={300}
                    height={200}
                    className="categoriesCardImage"
                  />
                  <div className="categoriesSliderContent">
                    <div className="categoriesCardInfo">
                      <p>{e.title}</p>
                    </div>
                    <div className="categoriesCardIcon">
                      <FaRegHeart />
                    </div>
                  </div>

                  <div className="categoriesColorsList">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="categoriesColorsBox"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                    <div className="categoriesColorValue">
                      <p>+120colors</p>
                    </div>
                  </div>

                  <div className="categoriesCardRating">
                    <div className="categoriesRating">{e.rating}</div>
                    <div className="categoriesStars">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color={
                            index < Math.round(parseFloat(e.rating))
                              ? "#FFD700"
                              : "#e4e5e9"
                          }
                        />
                      ))}
                    </div>
                    <div className="categoriesRatingInfo">{e.ratingInfo}</div>
                  </div>

                  <div className="categoriesShirtSize">
                    <div className="categoriesSize">{e.size}</div>
                  </div>

                  <div className="categoriesCardAmount">
                    <div className="categoriesPrice">{e.price}</div>
                    <div className="categoriesDiscount">{e.discount}</div>
                  </div>
                  <div className="categoriesAddCart">{e.buy}</div>
               
                  </Link>
               
                </div>
              ))}
            
           
            
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSize;
