import React from 'react'
import Image from 'next/image'
import { BsInstagram, BsFacebook, BsTwitter, BsTelephone } from "react-icons/bs"
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai"
import { FaLocationDot } from "react-icons/fa6"

import location from "../assets/location-marker.png"
import line from "../assets/Line.png"
import copyright from "../assets/copyright.png"

const Footer: React.FC = () => {
    return (
      <>
        <div className='bg-[#3C20AC]'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 text-white pb-12'>
            <div className='col-span-1 ml-28'>
              <Image
                src="/camp.png"
                alt='campus'
                className='w-28 h-24 flex justify-center items-center mt-8 mb-8'
                width={2432}
                height={1442}
              />
              <p className='w-64 h-24 mb-12 '>
                Building a happier world with love we help with accurate, and precise intent analysis to improve customer experience.
              </p>
              <div className='flex'>
                <p className='mr-4 '>Join our community</p>
                <BsInstagram className='w-7 h-7 rounded-md ml-1 mr-1' />
                <BsFacebook className='w-7 h-7 rounded-md ml-1 mr-1' />
                <BsTwitter className='w-7 h-7 rounded-md ml-1 mr-1' />
              </div>
            </div>
            <div className='col-span-1 mt-20 ml-32'>
              <p className='font-bold'>Explore</p>
              <br />
              <a href='/' className=' font-light'>Home</a>
              <br />
              <br />
              <a href='/aboutus' className='font-light'>About Us</a>
              <br />
              <br />
              <a href='/' className='font-light'>Privacy policy</a>
              <br />
              <br />
              <a href='/' className='font-light'>Terms and conditions</a>
            </div>
            <div className='col-span-1 mt-20 ml-20'>
              <p className='font-bold'>Quick Links</p>
              <br />
              <a href='/' className=' font-light'>Billing and Pricing</a>
              <br />
              <br />
              <a href='/' className='font-light'>FAQ</a>
              <br />
              <br />
              <a href='/' className='font-light'>Help & Support</a>
            </div>
            <div className='col-span-1 mt-20 '>
              <p className='font-bold'>Contact</p>
              <br />
              <div className="flex">
                <BsTelephone className='mr-4' />
                <a href='/contact' className='font-light'>0706 753 8720</a>
              </div>
              <div className="flex mt-4">
                <AiOutlineMail className='mr-4' />
                <a href='/contact' className='font-light'>blwzoneb@gmail.com</a>
              </div>
              <div className="flex mt-4">
                <FaLocationDot className='mr-4' />
                <a href='/contact' className='font-light'>UNN</a>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <Image 
              src="/Line.png" 
              className='w-fit' 
              alt="line"
              width={2432}
              height={1442}
            />
          </div>
          <div className='flex justify-center items-center pb-4'>
            <AiOutlineCopyright className='w-5 h-5 mr-1' />
            <p className='text-white font-thin'>Copyright 2022 | Heed</p>
          </div>
        </div>
      </>
    )
  }
export default Footer