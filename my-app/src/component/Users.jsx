import React from 'react'
import user from '../assets/user-3.png'

const Users = () => {
  return (
    <div className='container flex-col w-full p-3 border-b-2
    cursor-pointer transition hover:bg-gray-100 md:w-full lg:w-auto' >
        <div className="flex items-center gap-4 ">
            <img className='w-[80px] object-cover rounded-full' src={user} alt="" />

            <div>
            <div className='flex items-center gap-20'>
            <h2 className='font-bold text-2xl'>Adelani</h2>
            <span className="ml-auto bg-purple-500 rounded-full px-3 text-white text-xl font-semibold">
            LOOKING
            </span>
        </div>    
        <p className='text-xl'>good aftertnoon</p> 
            </div>
       
        </div>
        
    </div>
  )
}

export default Users