import React, { useEffect ,useState} from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { API_KEY, YOUTUBE_URL } from '../utils/constant';

const VideoContainer = () => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetchdata();

    }, []);
    const fetchdata = async () => {
        const data = await fetch(YOUTUBE_URL + API_KEY);
        const result = await data.json();
        console.log(result);
        setVideo(result);
    }
   
    if(video.length===0)
    return<h1>loading.........</h1>


  return (
    <div className='flex flex-wrap'>
          
          {video?.items?.map((v) => {
              return <Link to={"/watch?v=" + v?.id} key={v?.id}><VideoCard id={v?.id} videoimg={v?.snippet?.thumbnails?.high?.url} title={v?.snippet?.title} channelTitle={v?.snippet?.channelTitle} viewCount={v?.statistics?.viewCount} />
              </Link>
          })}
      </div>
  )
}

export default VideoContainer
