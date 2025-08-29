import Navbar from '@/components/Navbar';
import React from 'react'
import Link from 'next/link';

async function Dashboard() {
   
    const res=await fetch('https://api.imgflip.com/get_memes')
    const result=await res.json()
    console.log(result.data.memes)
    const meme=result.data.memes
      return (
        <>
        <Navbar/>
    <div className="flex flex-wrap justify-around  align-middle gap-24 mx-10 mt-24 shadow-2xl">
      
      {meme.map((item:any,index:any)=>{
         return <div  key={index}>
        <Link href={`/detail/${item.id}`}>
        <div >
            <h1 className="font-bold">{item.name}</h1>
            <br/>
            <img src={item.url} className="w-full h-64"/>
        </div>
    </Link>
    </div>

      })}
    </div>
    </>
  )
}

export default Dashboard
