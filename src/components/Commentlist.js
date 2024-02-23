import React from 'react'

const Commentlist = ({name,description,children}) => {
  return (
      <li className='p-4 border-l-slate-100 border-l-2'>
          <div className='flex '>
              <div className='m-2'>
                  <img className="w-10 h-10" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"/>
              </div>
              <div className=''>
                  <div>
                      {name}
                  </div>
                  <div>
                      {description}
                  </div>
                  {
                      children?.length > 0 &&
                      (
                          <ul>
                              {children.map((c,index) => {
                                  return <Commentlist key={index} name={c.name} description={c.description} children={c.children} />
                              })}
                          </ul>
                      )
                  } 
              </div>
             

          </div>
         
      </li>
  )
}

export default Commentlist
