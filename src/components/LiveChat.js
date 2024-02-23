import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generate, makeid } from '../utils/liveData';
import { livechat } from '../utils/chatSlice';
const LiveChat = () => {
    
    useEffect(() => {
        console.log("use")
        const live = setInterval(() => {
            console.log('hee')
            liveee();
        }, 1000);
        return () => clearInterval(live);
    }, [])
    const dispatch = useDispatch();
    const liveee = () => {
        dispatch(livechat({
            "name": generate(),
            "des": makeid(20)
        }))

    }
    
    const select = useSelector((store) => store.chat.chatData);
    console.log(select);
    return (
        <>
            <div className=' '>
                {
                    select?.map((m, index) => {
                        return <div className="flex m-3" key={index}>
                            <div>
                                <img className="w-5 h-5" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" />
                            </div>
                            <div className='ml-2'>
                                <span className='font-bold mr-2'>
                                    {m.name}
                                </span>

                                <span>
                                    {m.des}😊
                                </span>
                            </div>


                        </div>

                    })

                }

            </div>
            
        </>
    )
}

export default LiveChat
