import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen bg- flex-col items-center justify-between p-24">
      <div className="mx-auto h-[28rem] bg- grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
    </main>
  )
}
