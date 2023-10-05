"use client"
import Image from 'next/image'
import { Card } from 'flowbite-react';
import Hero from "./components/chapterSlider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="overflow-hidden mx-auto px-24 pt-10 grid max-w-2xl grid-cols-1 gap-x- gap-y-1 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="bg-white flex justify-center items-center tracking-wider">
          <div className='space-y-5'>
            <p className="text-3xl uppercase font-bold text-gray-900 sm:text-7xl">Welcome to BLW ZONE B</p>
            <h2 className="text-md font-semibold leading-7">Building a happier world with love, starting with you.</h2>
          </div>
        </div>
        <div className="">
          <Image
            src="/po.png"
            alt=""
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-[url('/bg1.png')] w-full bg-center bg-cover px-20" style={{"backgroundRepeat":"no repeat, repeat"}}>
        <Card className="w-5/6">
        <h5 className="text-4xl font-bold tracking-tight text-gray-900 flex justify-center items-center py-10">
          <p>
            Who are we?
          </p>
        </h5>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="col-span-1">
                <Image 
                  src="/camp.png"
                  alt='campus ministry logo'
                  className='w-96 h-80 flex justify-center items-center'
                  width={2342}
                  height={1442}
                />
              </div>
              <div className="col-span-1">
                <p className='text-xl font-bold'>
                  Lörem ipsum dimisk heterossa har vilet, tengen. Nätfiske vaktig oren prengar, huruvida pred. Presam sav emedan anatynas mide. Stenofyst dinade irid. Spetidade mervärdesmat nejok pir vagt. 
                Ming infradev, debel inte nenell antetire. Teleck höserat sapir. Dolasat. Nenuktig detesm. Äras multisydor nerade och ejolig i airbaghjälm. 
                Ralig robothandel ralig. Beturade menskonst. Beras. Preläktig tusafanade. Becknarväska bavis. 
                Nul lefäligt, då mikroblogg. Nuräd kalkstenssångare, 
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="col-span-1">
            <Image 
              src="/prolific.png"
              alt='prolific'
              className='w-full flex justify-center items-center '
              width={2342}
              height={1442}
            />
          </div>
          <div className="col-span-1">
            <div className='flex justify-center items-center h-screen pr-24'>
              <p 
              className='text-xl'>
                <b>The Year of the Prolific Church</b>
                <br />
                <br />
                You’re going to be so prolific everywhere in an outstanding way; you’ll see it happening because this is God’s plan”
                  — Pastor Chris Oyakhilome.
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className='mb-24'>
      <p className='text-4xl flex justify-center items-center py-4 font-bold'>Events</p>
      <div className='flex justify-center items-center'>
        <div className="bg-[#3C20AC] p-2 rounded-full text-white mx-10 w-14 h-14 flex justify-center items-center">
          <AiOutlineArrowLeft
            className='w-7 h-7 hover:mr-4 transition ease-in-out delay-150'
          />
        </div>
        <div >
        <Image 
            src="/thanks.png"
            alt='thanks'
            className='w-full flex justify-center items-center '
            width={2342}
            height={1442}
        />
        </div>
        <div className="bg-[#3C20AC] p-2 rounded-full text-white mx-10 w-14 h-14 flex justify-center items-center">
          <AiOutlineArrowRight
            className='w-7 h-7 hover:ml-4 transition ease-in-out delay-150'
          />
        </div>
        
      </div>
    </div>
    </main>
  )
}
