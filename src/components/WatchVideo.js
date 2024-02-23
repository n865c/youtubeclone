import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { permenantToggle } from '../utils/sliceStore';
import Sidebar from './Sidebar';
import Comment from './Comment';
import LiveChat from './LiveChat';
import { livechat } from '../utils/chatSlice';

const WatchVideo = () => {
  const [query, setQuery] = useSearchParams();
  const [message, setMessage] = useState('');
  console.log(query.get('v'));
  const dispatch = useDispatch();
  const toggleTheme = useSelector((store) => store.event.toggle);
  const closetoggle = () => {
    dispatch(permenantToggle());
  }
  useEffect(() => {
    closetoggle();
    window.scrollTo(0, 0)

  }, [])
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(livechat({
      "name": "Nancy",
      "des": message
    }))
    console.log('Message submitted:', message);
    setMessage('');
  };

  return (
    <>
      <div className='grid grid-flow-col'>
        {toggleTheme === true ?
          <div className='col-span-1'>
            <Sidebar />
          </div> : ""}
        <div className='ml-16 mt-24 col-span-11 flex'>
          <iframe className='rounded-lg' width="800" height="500" src={"https://www.youtube.com/embed/" + query.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div></div>
          <div className='flex flex-col'>
            <div className='ml-10 border-2 border-black font-bold text-center p-2 w-auto h-auto bg-gray-100'>Live Chat</div>
          <div className="ml-10 p-3 w-[400px] h-[500px] border-x-2 border-black overflow-x-hidden overflow-y-scroll flex flex-col-reverse">
            
            <LiveChat/>
            
            
          </div>
          <div className='ml-10 border-2 border-black'> 
            < form onSubmit={handleSubmit} className=" bottom-0 left-0 right-0 bg-white p-1">
              <div className="">
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  className="px-4 w-72 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-700"
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
            </div>




        </div>
        

      </div>
     

      <div className='mt-4'>
        <div className='mx-16 mb-6 font-bold text-2xl'>Comments</div>
        <Comment />
      </div>
    </>
  )
}

export default WatchVideo
