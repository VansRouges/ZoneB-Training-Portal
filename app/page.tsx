"use client"
import Image from 'next/image'
import { Card } from 'flowbite-react';
import Slider from "./components/Slider"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="overflow-hidden mx-auto px-24 pt-10 grid max-w-2xl grid-cols-1 gap-x- gap-y-1 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="bg-white flex justify-center items-center tracking-wider">
          <div className='space-y-5'>
            <p className="text-3xl uppercase font-bold text-gray-900 sm:text-7xl">Welcome to BLW ZONE B</p>
            <h2 className="text-md font-semibold leading-7">Building a happier world with love, starting with you</h2>
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
      <div className="overflow-x">
        <Slider />
      </div>
    </main>
  )
}
