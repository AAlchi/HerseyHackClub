import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import StatBoxes from './StatBoxes'
import { useRouter } from 'next/router' 

const Summary = () => {
  const router = useRouter() 
  return (
    <div className='bg-gradient-to-r from-orange-900 via-orange-5=900 to-orange-700 justify-center flex'>
    <div className='text-white py-20 flex lg:px-20 px-2 gap-10 justify-evenly lg:flex-row flex-col items-center' style={{maxWidth: "1500px"}}>
      <div className='flex flex-col text-center justify-center items-center lg:justify-start lg:items-start lg:text-start gap-3 w-full lg:w-1/2'>
        <h1 className='font-extrabold text-4xl'>What is Hack Club?</h1>
        <p className='text-lg lg:w-4/5 w-10/12 flex items-start'>Hack Club is a global organization dedicated to helping teen coders. The Hersey Hack Club is a branch from the global organization. Here, you will learn how to code, be creative, and also socialize! </p>
        <br></br>
        <div className='flex flex-col gap-1 lg:w-2/5 w-11/12'>
          <StatBoxes icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" text="Socialize and meet new people" />
          <StatBoxes icon="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" text="50 minute workshops" />
          <StatBoxes icon="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" text="In-person" />
        </div>
      </div>
      <div className='flex flex-col items-center lg:w-2/5 w-11/12'>
        <div className='relative flex flex-col items-end justify-center'> 
          <img src={"/Coding.jpg"} alt={`Image`} className='object-cover h-full w-auto' rel="preload" />  
        </div>
      </div>
    </div>
    </div>
  )
}

export default Summary
