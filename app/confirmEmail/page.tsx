import React from 'react'
import Image from "next/image"

function confirmEmail() {
  return (
    <>
      <div className="bg-white flex gap-3 justify-center items-center h-96">
        <h1 className="text-3xl font-bold">Please Check Your Mail</h1>
        <Image 
            src="/email.svg"
            alt='campus ministry logo'
            className='w-32 h-32 flex justify-center items-center'
            width={2342}
            height={1442}
        />
      </div>
    </>
  )
}

export default confirmEmail
