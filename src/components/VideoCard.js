import React from 'react'

const VideoCard = (props) => {
    const { videoimg, title, channelTitle, viewCount } = props;
  return (
    <div className='w-80 h-2/3 p-2 m-2 rounded-md border-gray-400'>
          <img src={videoimg}  className='rounded-md'/>
          <p>{title}</p>
          <div>{channelTitle}</div>
          <div>{Math.floor(viewCount/1000)}K views</div>
    </div>
  )
}

export default VideoCard
