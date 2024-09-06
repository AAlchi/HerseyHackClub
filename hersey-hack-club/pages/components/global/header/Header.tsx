import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const [hasScrolled, setHasScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.15
            setHasScrolled(window.scrollY > threshold)
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className={`fixed w-full z-10 text-white text-xl transition-colors duration-300 ease-in-out ${hasScrolled || menuOpen ? 'bg-header' : 'bg-transparent'}`}>
            <div className='p-5 flex justify-start items-center gap-3'>
                <img src='/HackClub_Logo.png' alt="logo" style={{maxWidth: "35px"}}/>
                <h1 className='text-xl font-bold'>Hersey Hack Club</h1>  
            </div>  
        </header>
    )
}

export default Header
