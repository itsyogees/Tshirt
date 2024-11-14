import Navbar from "@/app/component/Navbar/page";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Orderingpage = () => {
  const colors = [
    "#FFB3B3",
    "#B3FFB3",
    "#B3B3FF",
    "#FFB3E6",
    "#B3FFF6",
    "#F6FFB3",
    "#FFD1B3",
    "#B3FFD1",
    "#FFB3FF",
    "#FFDAB3",
    "#B3E1FF",
    "#E1B3FF",
    "#FFE6B3",
    "#B3FFE6",
    "#D1B3FF",
    "#FFB3C2",
    "#C2FFB3",
    "#B3C2FF",
    "#FFCCB3",
    "#B3FFCC",
    "#CCB3FF",
    "#FFB3D9",
    "#D9B3FF",
    "#D9FFB3",
    "#FFB3E1",
    "#E1FFB3",
    "#B3E1FF",
    "#FFE0B3",
    "#B3FFE0",
    "#E0B3FF",
    "#FFB3C9",
    "#B3FFC9",
    "#C9FFB3",
    "#FFB3E0",
    "#E0FFB3",
    "#B3E0FF",
    "#FFB3D1",
    "#D1B3FF",
    "#B3FFD1",
    "#B3D1FF",
    "#FFC2B3",
    "#FFB3C2",
    "#B3D1FF",
    "#FFCCB3",
    "#B3FFCC",
    "#FFB3CC",
    "#CCFFB3",
    "#B3CCFF",
  ];

  return (
    <div className="orderingpage">
      <div className="orderingpageContainer">
        <div className="orderingpageHead">
          <Navbar />
        </div>
        <div className="orderingpageHero">
          {/* Design Options Section */}
          <div className="designTshirt">
            <div className="d">
              <div className="designPosition">
                {["Front", "Back", "R.Sleeve", "L.Sleeve"].map(
                  (label, index) => (
                    <div className="smallImgDesigns" key={index}>
                      <img
                        src="/image/small.png"
                        alt="design"
                        width={40}
                        height={40}
                      />
                      <p>{label}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Main T-shirt Image Section */}
            <div className="orderingImage">
              <img src="/image/ordering.jpeg" alt="T-shirt" />
            </div>
          </div>
          {/* Review and Rating Section */}
          <div className="orderingpageReview">
            <div className="orderingReviewContent">
              <h2>Gildan Softstyle Jersey T-shirt</h2>
              <div className="rating">
                4.5
                {[...Array(4)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
            </div>

            {/* Color Selection Section */}
            <div className="orderingpageColours">
              <h2>Colours:</h2>
              <div className="colorOptions">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="colorBox"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <h2>Sizes Available in:</h2>
              <p>YS | YM | YL | XS | S | M | L | XL | 2XL | 3XL | 4XL | 5XL</p>
              <button className="btn">Start Designing</button>
            </div>
          </div>
        </div>
        <div className="orderingpageContents">
          <div className="orderingpageContent">
            <h2>Product Description</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt ut labore
              dolore.adipiscing elit, sed do eiusmod tempor consectetur.
            </p>
          </div>
          <div className="orderingpageContent">
            <h2>Product Details</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt ut labore
              dolore.adipiscing elit, sed do eiusmod tempor consectetur
            </p>
          </div>
          <div className="orderingpageContent">
            <h2>Delivery Options</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt ut labore
              dolore.adipiscing elit, sed do eiusmod tempor consectetur
            </p>
          </div>
        </div>
        <div className="orderingReview">
          <div className="orderingReviewHead">
            <h2>Reviews</h2>
            <div className="rating">
              <AiFillStar />
            </div>
            <p>
              4.8 <span>(93,456 Reviews)</span>
            </p>
          </div>
          <div className="orderingReviewStars">
            <p>
              5 star{" "}
              <div className="bar">
                <div style={{ width: "84.05%" }}></div>
              </div>
              84.05%
            </p>
            <p>
              4 star{" "}
              <div className="bar">
                <div style={{ width: "14.43%" }}></div>
              </div>
              14.43%
            </p>
            <p>
              3 star{" "}
              <div className="bar">
                <div style={{ width: "1.60%" }}></div>
              </div>
              1.60%
            </p>
            <p>
              2 star{" "}
              <div className="bar">
                <div style={{ width: "0.33%" }}></div>
              </div>
              0.33%
            </p>
            <p>
              1 star{" "}
              <div className="bar">
                <div style={{ width: "0.44%" }}></div>
              </div>
              0.44%
            </p>
          </div>
        </div>
        <div className="orderingpageTestimonial">
          <div className="orderingTestimonialHead">
            <h2>Testimonials</h2>
            <a href="/">view more Reviews</a>
          </div>
          <div className="orderTestimonialContents">
            <div className="testimonialCard">
              <h2>Peter</h2>
              <p>Nov 9, 2023</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
                eiusmod tempor Lorem ipsum dolor sit amet, consecteturadipiscing
                elit, sed do eiusmod tempor
              </p>
            </div>
            <div className="testimonialCard">
              <h2>Peter</h2>
              <p>Nov 9, 2023</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
                eiusmod tempor Lorem ipsum dolor sit amet, consecteturadipiscing
                elit, sed do eiusmod tempor
              </p>
            </div>
            <div className="testimonialCard">
              <h2>Peter</h2>
              <p>Nov 9, 2023</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do
                eiusmod tempor Lorem ipsum dolor sit amet, consecteturadipiscing
                elit, sed do eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderingpage;
