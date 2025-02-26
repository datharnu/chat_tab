import React from 'react'
import sendMsg from '../assets/sendMsg.png'
import imgIcon from '../assets/image.png'

const Input = () => {
  return (

    <div className='max-w-full shadow-md rounded-md mr-4 border-4 p-5 flex flex-col gap-3'>

<div className='flex justify-between items-center'> 
        <input className='border-none bg-transparent outline-0 text-2xl' type="text" placeholder='start typing...' />
        <div className='flex flex-col items-center gap-3'>
        <input type="file" id='file' hidden/> 
        <label htmlFor="file">
          <img className='w-8 cursor-pointer' src={imgIcon} alt="" />
        </label>
      </div>
    </div>
    <div className='flex justify-end '>
    <button className='flex flex-row items-center gap-2 bg-gray-200 border-4 text-white p-2 rounded-xl
        text-lg w-30 font-bold'>
          <img className='w-4' src={sendMsg} alt="" />
          SEND</button>
    </div>
    
    </div>

  )
}

export default Input