"use client"
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image"

import image1 from '@/public/pst-success.png';
import image2 from '@/public/pst-will.png';
import image3 from '@/public/pst-christ.png';
import image4 from '@/public/pee.png';

function Hero() {
  // Display all the Hero images in an array
  const [images, setImages] = useState<StaticImageData[]>([image1, image2, image3, image4]);
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    // Shuffling the array every 5 seconds
    setAnimate(true);
    const interval = setInterval(() => {
      setImages((currentItems) => shuffleArray(currentItems));
    }, 5000);
    setTimeout(() => setAnimate(false), 1500);
    return () => clearInterval(interval);
  }, [images]);

  // Shuffling array
  function shuffleArray(originalArray: StaticImageData[]) {
    setAnimate(false);
    let array = [...originalArray];
    let currentIndex = array.length,
      temporaryValue = null,
      randomIndex = null;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Map through the images array to display them
  const heroImage = images.map((item, index) => {
    return (
      <div key={index} className={`h-[26rem] w-[360px] overflow-hidden ${animate ? 'item' : ''}`}>
        <Image src={item} alt="image" />
      </div>
    );
  });

  return (
    <div className="bg-[url('/bg3.png')]">
      <h1 className='py-7 text-white text-4xl font-bold text-center'>Group Pastors</h1>
      <div className={`hidden md:grid grid-cols-4 p-8 gap-[18px] content-center border-red-500 w-screen mt-[0px] mb-[162px]`}>
        {heroImage}
      </div>
    </div>
  );
}

export default Hero;






