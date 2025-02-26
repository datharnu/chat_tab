import React from 'react'
import SideBar from './sideBar.jsx'
import Chats from './Chats.jsx'

const MessageTab = () => {
  return (
    <div className='flex justify-items-start max-w-full h-screen overflow-hidden '>
        <SideBar />
        <Chats/>
    </div>
  )
}

export default MessageTab