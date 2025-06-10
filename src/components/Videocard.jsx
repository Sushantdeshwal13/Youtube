import React from 'react';

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return ( 
    <div className="p-2 m-2 w-[300px] shadow-md rounded-xl">
      <img
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        className="rounded-xl"
      />
      <ul>
        <li className="font-bold text-md">{title}</li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) =>{
  return(
    <div className='p-1 m-1 border border-red-900'>
      <Videocard info={info}/>
    </div>
  )
}


export default Videocard;

