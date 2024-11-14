import React from 'react';
 
import Image from 'next/image';

import { IoIosCloudUpload } from "react-icons/io";
import { RxText } from "react-icons/rx";
import { FaImage } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { IoText } from "react-icons/io5";
import Navbar from '@/app/component/Navbar/page';

const Designpage = () => {
  return (
    <div className='designContainer'>
      <Navbar/>
      <div className='imageContainer'>
        
        <div className='designSideContainer'>
          <div className='directionContainer'>
            <div className='directions'>
              <Image
                src="/image/undo.png"
                alt="design"
                width={40}
                height={30}
              />
              <p>Undo</p>
            </div>
            <div className='directions'>
              <Image
                src="/image/redo.png"
                alt="design"
                width={40}
                height={30}
              />
              <p>Redo</p>
            </div>
          </div>

          <div className='designPosition'>
            <div className='smallImgDesigns'>
              <Image
                src="/image/small.png"
                alt="design"
                width={40}
                height={40}
              />
              <p>Front</p>
            </div>

            <div className='smallImgDesigns'>
              <Image
                src="/image/small.png"
                alt="design"
                width={40}
                height={40}
              />
              <p>Back</p>
            </div>

            <div className='smallImgDesigns'>
              <Image
                src="/image/small.png"
                alt="design"
                width={40}
                height={40}
              />
              <p>R.Sleeve</p>
            </div>

            <div className='smallImgDesigns'>
              <Image
                src="/image/small.png"
                alt="design"
                width={40}
                height={40}
              />
              <p>L.Sleeve</p>
            </div>
          </div>
        </div>

        <div className='backgroundImage'>
          <Image
            src="/image/design.png"
            alt="design"
            width={500}
            height={500}
            layout="intrinsic"
          />
          <div className='imageContents'>
            <div className='homeBtn'>
              <button className='btn'>Save & Share</button>
              <button className='btn'>Get Price</button>
            </div>
          </div>
        </div>
      </div>

      <div className='thingsContainer'>
        <div className='things'>
          <div className='icons'>
            <IoIosCloudUpload />
          </div>
          <div className='iconsName'>
            <p>Upload</p>
          </div>
        </div>

        <div className='things'>
          <div className='icons'>
            <RxText />
          </div>
          <div className='iconsName'>
            <p>Add Text</p>
          </div>
        </div>

        <div className='things'>
          <div className='icons'>
            <FaImage />
          </div>
          <div className='iconsName'>
            <p>Add Image</p>
          </div>
        </div>

        <div className='things'>
          <div className='icons'>
            <IoWater />
          </div>
          <div className='iconsName'>
            <p>Watermark</p>
          </div>
        </div>

        <div className='things'>
          <div className='icons'>
            <IoText />
          </div>
          <div className='iconsName'>
            <p>Text</p>
          </div>
        </div>
      </div>

      <div className='contentContainer'>

          <div className='contents'>
              <h3>Softstyle Jersey T-shirt </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.
              adipiscing elit, sed do eiusmod tempor  consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do eiusmod tempor  consectetur</p>
          </div>

          <div className='contents'>
              <h3>Size & Fit Guide</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.
              adipiscing elit, sed do eiusmod tempor  consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do eiusmod tempor  consectetur</p>
          </div>

          <div className='contents'>
              <h3>Shipping</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.
              adipiscing elit, sed do eiusmod tempor  consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do eiusmod tempor  consectetur</p>
          </div>

          <div className='contents'>
              <h3>More Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.
              adipiscing elit, sed do eiusmod tempor  consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do eiusmod tempor  consectetur</p>
          </div>

        </div>



      <div className='buySection'>
          <h2>Buy More, Save More</h2>
          <div className='cardContainer'>

              <div className='cardContents'>
                
                <div className='cardsDemo'>
                  <div className='cardImg'>
                  <Image
                    src="/image/designCollection.png" 
                    alt="design" 
                    width={250} 
                    height={300}
                  >
                  </Image>
                  </div>
                  <div className='cardDetailsDemo'>
                    <p>Midweight 50/50</p>
                    <p> pullover Hoodie</p>
                  </div>
                  <div className='cartContainers'>
                  <p>Add to Cart</p>
                  </div>
                </div>
              </div>

              <div className='cardContents'>
                
                <div className='cardsDemo'>
                  <div className='cardImg'>
                  <Image
                    src="/image/designCollection.png" 
                    alt="design" 
                    width={250} 
                    height={300}
                  >
                  </Image>
                  </div>
                  <div className='cardDetailsDemo'>
                    <p>Midweight 50/50</p>
                    <p> pullover Hoodie</p>
                  </div>
                  <div className='cartContainers'>
                  <p>Add to Cart</p>
                  </div>
                </div>
              </div>

              <div className='cardContents'>
                
                <div className='cardsDemo'>
                  <div className='cardImg'>
                  <Image
                    src="/image/designCollection.png" 
                    alt="design" 
                    width={250} 
                    height={300}
                  >
                  </Image>
                  </div>
                  <div className='cardDetailsDemo'>
                    <p>Midweight 50/50</p>
                    <p> pullover Hoodie</p>
                  </div>
                  <div className='cartContainers'>
                  <p>Add to Cart</p>
                  </div>
                </div>

              </div>


          </div>

        </div>


      </div>
    );
};

export default Designpage;
