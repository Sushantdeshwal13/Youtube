 import React from 'react'
 import {useDispatch} from "react-redux"
 import { togglemenu } from '../utils/Appslice'

 const Head = () => {
   const dispatch = useDispatch(); 
  const toggleMenuHandler = () => {
    dispatch(togglemenu());
  };
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full shadow-md bg-white">
    <div  className="flex items-center gap-4 p-4">
      <i className="fas fa-bars text-2xl text-gray-700 cursor-pointer"  onClick={toggleMenuHandler}></i>
      <i className="fab fa-youtube text-3xl text-red-600"></i>
      <span className="text-2xl font-bold text-gray-800 tracking-tight">YouTube</span>
    </div>
    <div>
      <input className="border border-gray-400 rounded-l-full px-3 py-1 w-80 outline-none
       focus:ring-2 focus:ring-blue-500 " type="text" placeholder="Search"></input>
      <button className='rounded-r-full border border-gray-400 px-3 py-1 bg-gray-300'>
        <i className='fas fa-search text-gray-600'></i></button>
    </div>
    <div>
     <i className="fas fa-user-circle text-3xl text-blue-600"></i>
    </div>
    </div>
  )
}

export default Head
