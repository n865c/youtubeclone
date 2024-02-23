import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
     
      
        <div className=''>
        <ul className='ml-3 mt-16 mb-4'>
          <Link to="/" ><li className='p-2 cursor-pointer hover:bg-black hover:rounded-lg hover:text-white'>Home</li></Link>
          <li className='p-2 cursor-pointer hover:bg-black hover:rounded-lg hover:text-white'>
            Shorts
          </li>
          <li className='p-2 cursor-pointer hover:bg-black hover:rounded-lg hover:text-white'>Subscriptions</li>
        </ul>
        <hr className='mb-3 ml-3 p-2'></hr>
        <ul className='ml-3 mt-3 mb-2'>
          <li className='font-bold'>You</li>
          <li className='p-2 cursor-pointer hover:bg-black hover:rounded-lg hover:text-white'>History</li>
          <li className='p-2 cursor-pointer hover:bg-black hover:rounded-lg hover:text-white'>
            Watch later
          </li>
          <li className='p-2 cursor-pointer hover:bg-black hover:rounded-lg hover:text-white'>liked videos</li>
        </ul>
        </div> 
    </div>
  )
}

export default Sidebar
