

import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
     
      <Link href={'/Dashboard'}>
    <div className="h-screen w-screen flex justify-center items-center">
    <button className="px-6 py-3 bg-black text-white text-sm sm:text-base rounded-md shadow  ">
    Click to go dashboard
  </button>
</div>
      </Link>
    </div>
  )
}

export default page
