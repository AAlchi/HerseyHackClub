import { useRouter } from 'next/router';
import React, { useState } from 'react'

interface WorkshopBlockInterface {
  name: string;
  link: string
}

const WorkshopBlock: React.FC<WorkshopBlockInterface> = ({
  name,
  link
}) => { 
  const router = useRouter();

  return (
    <div className='bg-white text-black rounded-lg p-4 lg:w-11/12 w-full'>
      <div onClick={() => router.push(link)} className='flex items-center justify-between cursor-pointer'>
        <h1 className='text-lg font-extrabold'>{name}</h1> 
      </div>  
    </div>
  )
}

export default WorkshopBlock