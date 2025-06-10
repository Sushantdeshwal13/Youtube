import React from 'react'

const Chatmsg = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <i className="fas fa-user-circle text-3xl text-blue-600"></i>
        <span className='font-bold px-3'>{name}</span>
        <span>{message}</span>
      
    </div>
  )
}

export default Chatmsg
