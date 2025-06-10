import React, { useEffect, useState } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux';
import {addmessage} from '../utils/chatslice';
import { generateRandomName } from '../utils/Helper';
import { generateMotivationalMessage } from '../utils/Helper';

const Livechat = () => {
  let [livemessage, setlivemessage] = useState("");
  
    const dispatch = useDispatch();

    const Chatmessage = useSelector((store)=> store.chat.messages || []);

    useEffect(()=>{
        const i = setInterval(()=>{
            //API polling
            dispatch(
                addmessage({
                    name:generateRandomName(),
                    message:generateMotivationalMessage(),
                })
            )
        },700);
        return ()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className='ml-2 p-2 border border-black h-[550px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
 
    {Chatmessage && Chatmessage.map((c,i)=>(
      <Chatmsg key={i}
     name={c.name}
     message={c.message}
    />
    )) }
    </div>
    </div>
    <form className="w-full p-2 sm:p-3 ml-2 border border-black flex items-center gap-2 sm:gap-3 bg-white rounded-lg"
    onSubmit={(e)=>{
      e.preventDefault();

      dispatch(addmessage({
        name:"Sushant Deshwal",
        message:livemessage,
      }))
        setlivemessage("");
    }}
    >
  <input 
    className="flex-1 p-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
    type="text" value={livemessage} onChange={(e)=>{
      setlivemessage(e.target.value);
    }}
    placeholder="Type your message..."  />
  <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" > Send</button>
</form>
    </>
  )
}

export default Livechat
