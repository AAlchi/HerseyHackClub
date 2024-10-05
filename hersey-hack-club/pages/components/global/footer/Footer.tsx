import Image from 'next/image'
import React from 'react' 
import ContactBlock from './ContactBlock' 

const Footer = () => {
    return ( 
        <footer className='w-full bg-black py-10 px-5 lg:px-10'>
            <div className='text-white flex lg:flex-row flex-col pb-5'>
                <div className='flex-initial lg:w-3/5 w-full flex items-start flex-col'>
                    <div className='w-full border-b-2 border-white flex items-center mb-5' style={{ height: "60px" }}>
                        <div className='py-5 flex justify-start items-center gap-3'>
                            <Image width={50} height={50} src='/HackClub_Logo.png' alt="logo" style={{ maxWidth: "35px" }} />
                            <h1 className='text-xl font-bold'>Hersey Hack Club</h1>
                        </div>
                    </div>
                    <div className='text-white'>   
            </div>
                </div>

                <div className='flex-initial lg:w-3/5 w-full flex items-start flex-col lg:pt-0 pt-10'>
                    <div className='w-full border-b-2 border-white flex items-center mb-5' style={{ height: "60px" }}>
                        <h1 className='text-2xl'>Contact Us</h1>
                    </div> 
                    <ContactBlock name="Ali AI" email='aalchikhibrahim6522@stu.d214.org' label='Director' /> 
                </div>
            </div> 
        </footer> 
    )
}

export default Footer