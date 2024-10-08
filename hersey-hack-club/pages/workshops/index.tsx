import React from 'react'
import Header from '../components/global/header/Header'
import WorkshopBlock from './WorkshopBlock' 
import { useRouter } from 'next/router'
import Head from 'next/head'

const WorkshopPage = () => {
  const router = useRouter();

  const workshopData = [
    {
      id: 1,
      name: "No Workshops Yet",
      link: "/"
    } 
  ]
  
  return (
    <>
      <Head>
        <title>Hersey Hack Club - Workshops</title>
        <link rel="icon" href="/HackClub_Logo.png" />
        <link rel="preload" href="/LandingBackground.jpg" as="image" />
      </Head>
      <div className='flex justify-center bg-black py-10 shadow-lg tracking-wide'>
        <div className='text-white bg-blue-850 py-10 lg:md:px-20 w-full px-5 justify-center items-center flex-col flex' style={{ maxWidth: "1500px" }}>
          <div className='items-start flex flex-col w-full'>
            <div className='flex items-center gap-2 justify-center pb-3'>
              <span className='text-xl font-bold cursor-pointer' onClick={() => router.push("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
              </span>
              <h1 className='text-3xl font-extrabold'>Workshops</h1>
            </div>
            <div className='w-full border-b-2 border-white' style={{ height: "2px" }} />
          </div>
          <div className='flex gap-3 w-full flex-col items-center justify-center pt-10'>
            {workshopData.map(data => (
              <div key={data.id} className='w-full'>
                <WorkshopBlock name={data.name} link={data.link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkshopPage