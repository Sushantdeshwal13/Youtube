 import React, { useEffect } from 'react'
 import { useState } from 'react'
 import {useDispatch} from "react-redux"
 import { togglemenu } from '../utils/Appslice'
 import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { chacheresults } from '../utils/searchslice'
import { useSelector } from "react-redux";




 const Head = () => {
  const [searchquery, setsearchquery] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion]= useState(false)

  const searchcache = useSelector((store) => store.search);


  useEffect(()=>{
    //api call 
    const timer = setTimeout(()=>{
      if(searchcache[searchquery]){
        setsuggestion(searchcache[searchquery]);
      }else{
      getsearchsuggestions();
      }
       } ,200);
       
    return()=>{
      clearTimeout(timer);
    };
   //make an api call after ever key press
   //but if the difference between 2 Api calls is < 200ms 
   //decline the api call
  },[searchquery]);

   const getsearchsuggestions = async()=>{
    console.log("API CALL - " + searchquery)
      const data = await fetch(YOUTUBE_SEARCH_API(searchquery));
      const json = await data.json();
      // console.log(json[1]);
      setsuggestion(json[1]);

      //update cache
      dispatch(
        chacheresults({
          [searchquery]: json[1],
        })
      );
    };

   const dispatch = useDispatch(); 
  const toggleMenuHandler = () => {
    dispatch(togglemenu());
  };
  return (
   <div className="fixed top-0 left-0 right-0  z-50 flex items-center justify-between px-4 py-2 w-full shadow-md bg-white">

    <div  className="flex items-center  gap-4 p-4">
      <i className="fas fa-bars text-2xl text-gray-700 cursor-pointer"  onClick={toggleMenuHandler}></i>
      <i className="fab fa-youtube text-3xl text-red-600"></i>
      <span className="text-2xl font-bold text-gray-800 tracking-tight">YouTube</span>
    </div>
    <div>
      <input className="border border-gray-400 rounded-l-full px-3 py-2 w-80 outline-none
       focus:ring-2 focus:ring-blue-200 " type="text" placeholder="Search"
       value={searchquery}
       onChange={(e)=> setsearchquery(e.target.value)}
       onFocus={()=> setshowsuggestion(true)}
       onBlur={()=> setshowsuggestion(false)}
       ></input>
      <button className='rounded-r-full border border-gray-400 px-3 py-2 bg-gray-300'>
        <i className='fas fa-search text-gray-600'></i></button>
       {showsuggestion && suggestion.length >0 &&(
    <div className='fixed bg-white py-2 px-5 w-[20rem] border border-gray-200 shadow-lg rounded-lg '>
      <ul>
        {suggestion.map((s, index)=>(
            <li key ={index}className='py-2 hover:bg-gray-100 rounded-xl cursor-poiner'>
              <i className='fas fa-search text-gray-600 '></i> {s}</li>
        ))}
      </ul>
    </div>
    )}
     </div>
    <div>
     <i className="fas fa-user-circle text-3xl text-blue-600"></i>
    </div>
    </div>
  )
}

export default Head
