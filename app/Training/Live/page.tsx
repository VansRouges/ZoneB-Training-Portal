"use client"

export default function Live() {
  return (
    <main className='px-20 text-[#1F1F1F] mb-20'>
      <div className='p-3 space-y-3'>
        <h1 className='text-3xl font-bold uppercase'>Livestream</h1>
        <iframe className='w-full h-96' src="https://www.youtube.com/embed/ebF8dngcDQI?si=XnUOOY4w_xospGTQ" title="YouTube video player" ></iframe>
      </div>
      <div className='space-y-1 p-3'>
        <h1 className='capitalize font-semibold text-xl'>Special Training Meeting with Zonal Sectary</h1>
        <p className='text-sm'>Learn about how to function effectively as a Christian an grow in faith through your Giving and Partnership Special Training Meeting with Zonal Sectary</p>
      </div>
      {/* <div className="p-3 space-y-5 my-16">
        <h1 className="uppercase font-bold text-2xl">Videos</h1>
        <div className='flex m-'>
          {videoData.map((item) => (
            <div key={item.id} className="space-y-2">
              <img src={item.linkImg} />
              <h1 className="font-semibold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div> */}
      
    </main>
  )
}
