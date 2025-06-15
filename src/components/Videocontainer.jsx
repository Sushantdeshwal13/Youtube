import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import Videocard, { AdVideoCard } from './Videocard';
import { Link } from 'react-router-dom';


const Videocontainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setvideos(json?.items || []);
  };

  return (
    <div className="flex cursor-pointer flex-wrap">
      {Array.isArray(videos) && videos.length > 0 && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;