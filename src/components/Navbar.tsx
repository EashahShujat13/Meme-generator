import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div >

      <ul className='flex justify-center align-baseline bg-black text-xl text-white space-x-6 space-y-6 py-4 '>
        <li className='cursor-pointer'>Home</li>
        <Link href="/about">
        <li  className='cursor-pointer'>About Us</li>
        </Link>
        <li  className='cursor-pointer' >Contact Us</li>
        <li  className='cursor-pointer'>Login</li>

      </ul>
    </div>
  )
}

export default Navbar
