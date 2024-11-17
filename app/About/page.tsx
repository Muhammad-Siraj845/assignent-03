'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    return (
        <div className='text-center py-60 text-3xl font-semibold '>
            This is a About page
            <div className='flex justify-center items-center'>
              <button onClick={() => router.push('/')} className='py-3 px-3 bg-blue-400 text-white rounded-full hover:bg-blue-600  '>Home</button>
              </div>
        </div>
    )
}

export default page