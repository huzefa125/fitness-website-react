import React from 'react'
import poster from '../assets/front.jpg'
function Poster() {
  return (
    <div>
          <div
        className=" items-center justify-center flex w-[95%] mr-10 ml-10 h-120 rounded-md"
        style={{
          backgroundImage: `url(${poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
     <div >
      <div className=' font-light font-[sans]'>

       <h1 className='text-white  mr-240 text-8xl  '> HIT <br /></h1>
       <h1 className='text-white  mr-240 text-8xl  '> THE <br /></h1>
       <h1 className='text-white  mr-240 text-8xl  '> GYM <br /></h1>
        <p className='font-light text-xl p-5' style={{color:"#a9aaa8"}}>Take your health to next level</p>
        <button className='text-white font-bold bg-black p-2 ml-5 rouded-2xl'>Get Started</button>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Poster
