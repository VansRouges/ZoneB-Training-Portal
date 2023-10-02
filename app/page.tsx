import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="overflow-hidden bg-white pt-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="w-[35rem] mt-20 ml-20 space-y-5 p-2 tracking-wider">
              <p className="mt-2 text-3xl uppercase font-bold text-gray-900 sm:text-7xl">Welcome to BLW ZONE B</p>
              <h2 className="text-md font-semibold leading-7 text-start">Building a happier world with love</h2>
            </div>
          </div>
          {/* <Image
            src={Po}
            alt="Product screenshot"
            className="w-[28rem] max-w-2xl rounded-xl ring-1 ring-gray-400/10 sm:w-[46rem] pr-12"
            width={2432}
            height={1442}
          /> */}
        </div>
      </div>
    </div>
    </main>
  )
}
