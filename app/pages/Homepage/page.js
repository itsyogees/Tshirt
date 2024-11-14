import Navbar from "@/app/component/Navbar/page";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepageContainer">
          <div className="homepageHero">
            <Navbar />
            <div className="homepageHeroContent">
              <h2>Make and Buy Your Own Customized T-Shirt Online</h2>
              <p>
                Don’t you just love those t-shirts customized and designed
                especially for you? Click here to get your own now!
              </p>
              <button>Shop now</button>
            </div>
          </div>

          <div className="homepageContent">
            <div className="homepageContentHead">
              <h2>Features</h2>
            </div>
            <div className="homepageContentCards">
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-1.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-2.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-3.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-4.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="homepageWork">
            <div className="homepageWorkHead">
              <h2>How Its Works</h2>
            </div>
            <div className="homepageWorkCards">
              <div className="hompageWordCard">
                <img src="/image/producthome-1.png" alt="" />
                <h2>Select Product</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                  sed do eiusmod tempor consectetur.
                </p>
              </div>
              <div className="hompageWordCard">
                <img src="/image/producthome-2.jpeg" alt="" />
                <h2>Personalize Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                  sed do eiusmod tempor consectetur.
                </p>
              </div>
              <div className="hompageWordCard">
                <img src="/image/producthome-3.jpeg" alt="" />
                <h2>Checkout and Pay</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                  sed do eiusmod tempor consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="homepageChoice">
            <img src="/image/choice.png" alt="" />
            <div className="homepageChoiceText">
              <h2>Quick Personalized of Products of Your Choice</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed
                do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              </p>
              <button>Browse Shop</button>
            </div>
          </div>

          <div className="homepageDesigns">
            <img src="/image/design-1.jpeg" alt="" />
            <img src="/image/design-2.jpeg" alt="" />
            <img src="/image/design-3.jpeg" alt="" />
            <img src="/image/design-4.jpeg" alt="" />
          </div>

          <div className="homepageChoice">
            <div className="homepageChoiceText">
              <h2>Enjoy the Perfect Combination of Style and Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed
                do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              </p>
            </div>
            <img src="/image/homepageChoice.jpeg" className="w-50" alt="" />
          </div>

          <div className="homepageCustomer">
            <div className="hompageCustomerHead">
              <h2> What Customers Are Saying</h2>
            </div>
            <div className="homepageCustomerCards">
              <div className="customerCard">
                <div className="customerDetails">
                  <img src="/image/customer-1.png" alt="Customer" />
                  <div className="customerDetail">
                    <h2>Simson</h2>
                    <p>Manager</p>
                    <div className="rating">
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="customerReview">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi odit natus eos molestias accusantium, eius expedita
                    consequuntur ratione fugit modi deserunt aut earum aliquam
                    incidunt vitae tenetur sequi consectetur dolores?
                  </p>
                </div>
              </div>
              <div className="customerCard">
                <div className="customerDetails">
                  <img src="/image/customer-1.png" alt="Customer" />
                  <div className="customerDetail">
                    <h2>Simson</h2>
                    <p>Manager</p>
                    <div className="rating">
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="customerReview">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi odit natus eos molestias accusantium, eius expedita
                    consequuntur ratione fugit modi deserunt aut earum aliquam
                    incidunt vitae tenetur sequi consectetur dolores?
                  </p>
                </div>
              </div>
              <div className="customerCard">
                <div className="customerDetails">
                  <img src="/image/customer-1.png" alt="Customer" />
                  <div className="customerDetail">
                    <h2>Simson</h2>
                    <p>Manager</p>
                    <div className="rating">
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="customerReview">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi odit natus eos molestias accusantium, eius expedita
                    consequuntur ratione fugit modi deserunt aut earum aliquam
                    incidunt vitae tenetur sequi consectetur dolores?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homepage;
