import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/Appslice';
import { useSearchParams } from 'react-router-dom';
import Commentscontainer from './Commentscontainer';
import Democomments from '../utils/Democomments';
import Livechat from './Livechat';

const Watchpage = () => {
   const [searchParams] = useSearchParams();
   const videoId = (searchParams.get("v"));

    const dispatch = useDispatch();
    const [info, setInfo] = useState(null);

    useEffect(()=>{
        dispatch(closemenu());
    },[dispatch]);

    useEffect(() => {
    const fetchVideoData = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=AIzaSyBSok_cf0UQcXsAaZWRPC_UGVhC0RwEkXs&id=${videoId}`
      );
      const json = await data.json();
      setInfo(json.items[0]);
    };

    fetchVideoData();
  }, [videoId]);

  if (!info) return <div className="p-4">Loading...</div>;


  return (
     <div className="flex flex-col  ">
    <div className="px-4 py-6 flex ">
        <div >
        <iframe
          width="1000"
          height="550"
          src={`https://www.youtube.com/embed/${videoId}`} // ✅ Load video using ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
        <div className='w-full'>
          <Livechat/>
        </div>
         </div>
        {/* Video Title */}
        <h1 className="text-2xl font-bold mt-4">{info.snippet.title}</h1>
       
       
        {/* Channel Info & Subscribe */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-gray-700 font-medium">{info.snippet.channelTitle}</p>
            <p className="text-sm text-gray-600">{info.statistics.viewCount} views</p>
          </div>
          <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
            Subscribe
          </button>
       


      </div>
      <Commentscontainer comments={Democomments}/>
    </div>
  )
}

export default Watchpage
