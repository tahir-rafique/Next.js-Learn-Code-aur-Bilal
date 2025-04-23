'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

    const pathname = usePathname()
    return (
        <nav className='container mx-auto h-20 bg-teal-300 flex items-center justify-center font-bold gap-x-10'>
            <Link href='/' className={`${pathname == '/' ? 'bg-rose-300 p-2 rounded-md text-white text-xl' : ''}`}>Home</Link>
            <Link href='/about' className={`${pathname == '/about' ? 'bg-rose-300 p-2 rounded-md text-white text-xl' : ''}`}>About</Link>
            <Link href='/blogs' className={`${pathname == '/blogs' ? 'bg-rose-300 p-2 rounded-md text-white text-xl' : ''}`}>Blgos</Link>

            <Link href='/contact' className={`${pathname == '/contact' ? 'bg-rose-300 p-2 rounded-md text-white text-xl' : ''}`}>Contact</Link>
            <Link href='/dashboard' className={`${pathname == '/dashboard' ? 'bg-rose-300 p-2 rounded-md text-white text-xl' : ''}`}>Dashboard</Link>
        </nav>
    )
}

export default Header