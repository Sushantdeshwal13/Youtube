import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';


const Videocontainer = () => {
  const[videos, setvideos] = useState([]);

useEffect(()=>{
  getvideos();
},[]);

const getvideos = async ()=>{
  const data = await fetch(YOUTUBE_VIDEO_API);
  const json = await data.json();
  setvideos(json.items);
}

  return (
    <div className="flex cursor-pointer flex-wrap">
      {videos.map((video)=>(
        <Link key={video.id} to={"/watch?v=" + video.id}>
           <Videocard  info={video} />
     </Link>
      ))}
  
    </div>
  )
}

const fn = (videocard)=>{
  return <videocard/>
}

export default Videocontainer
