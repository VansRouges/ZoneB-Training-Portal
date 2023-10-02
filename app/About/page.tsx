import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="col-span-1">
            <p className='font-bold text-5xl'>About Us</p>
            <div className='flex justify-center items-center h-screen pr-24'>
              <p className='text-xl'>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. I
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src="/about1.png"
              alt="About Us"
              width={600}
              height={400}
              className='w-full flex justify-center items-center'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
