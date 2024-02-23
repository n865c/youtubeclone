import React from 'react'

const ButtonList = () => {
    const list = ["All", "Music", "live", "Gate Exam", "Mixes", "Mantras","Computer Science","Dramedy","Rituals","Statistics","News"];
  return (
      <div className='flex mt-16'>
          {list.map((l,index) => {
              return <button key={index } className='p-2 m-2 rounded-md bg-gray-200 hover:text-white hover:bg-black'>{l}</button>
          })}
      
    </div>
  )
}

export default ButtonList
