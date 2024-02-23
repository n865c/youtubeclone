import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux'

const Body = () => {
    const check = useSelector((store) => store.event.toggle)
  return (
      <div className='grid grid-flow-col'>
          {check===true?
              <div className='col-span-2 shadow-lg'>
                  <Sidebar />
              </div>:null}
          <div className='col-span-10'>
              <ButtonList/>
              <VideoContainer />
           </div>
          
    </div>
  )
}

export default Body
