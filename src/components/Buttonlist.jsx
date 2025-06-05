import React from 'react'
import Button from './Button'


const Buttonlist = () => {

  const list = ["All", "Live", "Coding", "Sports", "Politics", "UFC", "Gaming", "Cooking",
  "Songs", "MMA", "Travel", "News", "Movies", "Fitness", "Technology", "AI",
  "ReactJS", "NodeJS", "Startups", "Motivation", "Finance", "Stock Market",
  "Crypto", "Spirituality", "Health", "Vlogs", "Short Films", "Comedy",
  "Standup", "Documentaries", "Cars", "DIY", "Education", "Podcasts",];
  
  return (
    <div className='pt-4 m-5 '>
   <div className=" overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <Button btns={list}/>
    </div>
    </div>
  )
}

export default Buttonlist
