import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <nav className='container mx-auto h-20 bg-teal-300 flex items-center justify-center font-bold gap-x-10'>
            <Link href='/about'>About</Link>
            <Link href='/blogs'>Blgos</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/dashboard'>Dashboard</Link>
        </nav>
    )
}

export default Header