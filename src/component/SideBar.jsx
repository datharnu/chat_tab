 import React from 'react'
 import backIcon from '../assets/arrow.png'
 import Users from './Users'
import Disclaimer from './Disclaimer'
 const sideBar = () => {
   return (
        <div className='flex-1/2 w-[500px]  border-yellow-50  max-h-screen  border-r-2 shadow-2xl md:w-full lg:w-auto'>
            <div className="p-4 flex justify-between items-center">
                <img className='shadow-lg shadow-gray-600 w-8 bg-white border-none rounded-full p-1 cursor-pointer' src={backIcon} alt="" />
            </div>
            <Users/>
            <Users/>
            <Users/>

            <div className='flex items-end justify-center min-h-[50%] 
            '>
            <Disclaimer/>
            </div>
        </div> 
     
   )
 }
 
 export default sideBar