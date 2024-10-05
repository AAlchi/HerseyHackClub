"use client"
import React from 'react'
import Button from '../../global/button/Button'
import gsap from 'gsap'

const Landing = () => { 

    return (
        <div className='background text-white shadow-lg tracking-wide'>
            <div className='flex flex-col'>
                <div className='text-center flex flex-col gap-10 items-center justify-center pt-10 px-4 md:px-8 lg:px-16' style={{ minHeight: "600px", flex: "2" }}>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-5xl font-extrabold one font-extrabold'>
                            <span className="HSOrange">Code.</span> Win Prizes. <span className="HSOrange">Make a Difference.</span>
                        </h1>
                        <p className='text-lg font-bold two px-3'>
                            Join us from 3:10 to 4pm in room 158 for the Hersey Hack Club!
                        </p>
                    </div>
                    <div className='flex gap-3 lg:flex-row flex-col justify-center'>
                        <Button name="Workshops" navigate="/workshops" color="bg-white text-slate-500" icon="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 8.25.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        <Button name="Join the Discord" navigate="https://discord.gg/xSPsUkBnXh" color="bg-blue-800 text-white" icon="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Landing

