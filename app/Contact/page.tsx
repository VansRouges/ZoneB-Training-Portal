"use client"
import React from 'react'
import Image from "next/image"
import Form from '@/app/components/Form'

const Contact = () => {
  return (
    <>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="col-span-1">
            <p className='font-bold text-5xl'>Contact Us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <div className='mt-20'>
            <Form />
          </div>
        </div>
        <div className="col-span-1">
          <Image 
            src="/contact1.png"
            alt="contact"
            className='w-full flex justify-center items-center '
            width={2342}
            height={1442}
          />
        </div>
      </div>
    </div>
    <div className="w-320 h-[424px] pl-[44px] pr-[43.11px] pt-28 pb-[116.44px] bg-indigo-800 justify-center items-center inline-flex">
  <div className="self-stretch p-[0px] justify-start items-start gap-14 inline-flex">
    <div className="w-[360.30px] p-[0px] flex-col justify-start items-start gap-[21.33px] inline-flex">
      <div className="w-[42.67px] h-[42.67px] relative" />
      <div className="self-stretch h-[131.56px] p-[0px] flex-col justify-start items-start gap-[21.33px] flex">
        <div className="self-stretch h-[89.22px] p-[0px] flex-col justify-start items-start gap-[14.22px] flex">
          <div className="self-stretch text-neutral-100 text-[25px] font-bold">Email</div>
          <div className="self-stretch text-neutral-100 text-[14.222222328186035px] font-normal leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
        </div>
        <div className="self-stretch text-neutral-100 text-[14.222222328186035px] font-normal underline leading-snug">hello@relume.io</div>
      </div>
    </div>
    <div className="w-[360.30px] p-[0px] flex-col justify-start items-start gap-[21.33px] inline-flex">
      <div className="w-[42.67px] h-[42.67px] relative" />
      <div className="self-stretch h-[131.56px] p-[0px] flex-col justify-start items-start gap-[21.33px] flex">
        <div className="self-stretch h-[89.22px] p-[0px] flex-col justify-start items-start gap-[14.22px] flex">
          <div className="self-stretch text-neutral-100 text-[25px] font-bold">Phone</div>
          <div className="self-stretch text-neutral-100 text-[14.222222328186035px] font-normal leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
        </div>
        <div className="self-stretch text-neutral-100 text-[14.222222328186035px] font-normal underline leading-snug">+1 (555) 000-0000</div>
      </div>
    </div>
    <div className="w-[360.30px] p-[0px] flex-col justify-start items-start gap-[21.33px] inline-flex">
      <div className="w-[42.67px] h-[42.67px] relative" />
      <div className="self-stretch h-[131.56px] p-[0px] flex-col justify-start items-start gap-[21.33px] flex">
        <div className="self-stretch h-[89.22px] p-[0px] flex-col justify-start items-start gap-[14.22px] flex">
          <div className="self-stretch text-neutral-100 text-[25px] font-bold">Office</div>
          <div className="self-stretch text-neutral-100 text-[14.222222328186035px] font-normal leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
        </div>
        <div className="self-stretch text-neutral-100 text-[14.222222328186035px] font-normal underline leading-snug">123 Sample St, Sydney NSW 2000 AU</div>
      </div>
    </div>
  </div>
</div>
<div className="w-320 h-[859px] px-[56.89px] py-[99.56px] bg-white flex-col justify-start items-center gap-[71.11px] inline-flex">
  <div className="h-24 p-[0px] flex-col justify-center items-start gap-[21.33px] flex">
    <div className="self-stretch text-center text-black text-[39px] font-bold">Our Locations</div>
    <div className="self-stretch text-center text-black text-[16px] font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
  </div>
  <div className="w-[1166.22px] p-[0px] justify-center items-start gap-[56.89px] inline-flex">
    <div className="self-stretch p-[0px] flex-col justify-start items-center gap-[28.44px] inline-flex">
        <Image 
            className="w-[554.67px] h-[341.33px]" 
            src="https://via.placeholder.com/555x341"
            alt="placeholder"
            width={2342}
            height={1442}
        />
      <div className="self-stretch h-[138.89px] p-[0px] flex-col justify-start items-center gap-[21.33px] flex">
        <div className="self-stretch text-center text-black text-[31px] font-bold">BLW UNEC Enugu</div>
        <div className="self-stretch text-center text-black text-[14.222222328186035px] font-normal leading-snug">123 Sample St, Sydney NSW 2000 AU</div>
        <div className="py-[7.11px] justify-center items-center gap-[3.56px] inline-flex">
          <div className="text-black text-[14.222222328186035px] font-normal leading-snug">Get Directions</div>
          <div className="w-[14.22px] h-[14.22px] relative" />
        </div>
      </div>
    </div>
    <div className="self-stretch p-[0px] flex-col justify-start items-center gap-[28.44px] inline-flex">
        <Image 
            className="w-[554.67px] h-[341.33px]" 
            src="https://via.placeholder.com/555x341"
            alt="placeholder"
            width={2342}
            height={1442}
        />
      <div className="self-stretch h-[138.89px] p-[0px] flex-col justify-start items-center gap-[21.33px] flex">
        <div className="self-stretch text-center text-black text-[31px] font-bold">BLW UNN Nsukka</div>
        <div className="self-stretch text-center text-black text-[14.222222328186035px] font-normal leading-snug">123 Sample St, New York NY 10000 USA</div>
        <div className="py-[7.11px] justify-center items-center gap-[3.56px] inline-flex">
          <div className="text-black text-[14.222222328186035px] font-normal leading-snug">Get Directions</div>
          <div className="w-[14.22px] h-[14.22px] relative" />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact