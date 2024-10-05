import React from 'react' 
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import { useRouter } from 'next/router' 

const Summary = () => {
  const router = useRouter() 
  return (
    <div className='bg-gradient-to-r from-orange-900 via-orange-5=900 to-orange-700 justify-center py-10 flex shadow-lg tracking-wide'>
    <div className='text-white py-10 flex lg:px-20 px-2 gap-10 justify-evenly lg:flex-row flex-col items-center' style={{maxWidth: "1500px"}}>
      <div className='flex flex-col text-center  justify-center items-center gap-3 w-full lg:w-1/2'>
        <h1 className='font-extrabold text-4xl'>What is Hack Club?</h1>
        <p className='text-lg lg:w-4/5 w-10/12 flex items-center'>Hack Club is a global organization dedicated to helping teen coders. The Hersey Hack Club is a branch from the global organization. Here, you will learn how to code, be creative, and also socialize! </p>
     
      </div> 
    </div>
    </div>
  )
}

export default Summary
