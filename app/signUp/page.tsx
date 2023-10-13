// "use client"
import React from 'react'
import Image from "next/image"
import Messages from './messages'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// import type { Database } from '@/lib/database.types'

export default function SignUp() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const router = useRouter()
  // const supabase = createClientComponentClient()

  // const handleSignUp = async () => {
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   })
  //   router.refresh()
  // }

  return (
    <>
      <div className="grid grid-cols-2">
        <Image 
            src="/signup.png" 
            alt=""
            width={2432}
            height={1442}
        />
        <div className="bg-white">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-gray-900 text-center text-2xl leading-9 tracking-tight">
              <div className="flex justify-center items-center">
                <Image 
                    src="/camp.png"
                    alt=""
                    className='w-20'
                    width={2432}
                    height={1442}
                />
                <p className="font-bold">BLW ZONE B TRAINING</p>
              </div>
              <h2 className="mt-10 font-bold">
                Sign Up
              </h2>
              <p className="font-light">Kindly Provide your Details below</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6" 
                action="/auth/sign-up" 
                method="post"
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="full_name"
                      name="fullname"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      // onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                {/* <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}
                
                {/* Chapter */}
                {/* <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Chapter
                  </label>
                  <div className="mt-2">
                    <input
                      id="chapter"
                      name="chapter"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      // onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    // onClick={handleSignUp}
                  >
                    Register
                  </button>
                </div>
              </form>

              <p className="my-10 text-center text-sm text-gray-500">
                Already a member?{' '}
                <a href="/signIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Log In
                </a>
              </p>
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
