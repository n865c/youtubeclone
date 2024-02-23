import Commentlist from './Commentlist';
import React from 'react'

let comments = [
    {
        name: "nancy",
        description: "helloo",
        children: [
            {
                name: "john",
                description: "how are you?",
                children: [
                    {
                        name: "princy",
                        description: "hello, i am good",
                    }
                ]
            }
            
        ]
    },
    {
        name: "nancy",
        description: "helloo",
        children: [
            {
                name: "john",
                description: "how are you?",
                children: [
                    {
                        name: "princy",
                        description: "hello, i am good",
                    }
                ]
            }

        ]
    },
    {
        name: "nancy",
        description: "helloo",
        children: [
            {
                name: "john",
                description: "how are you?",
               
            }

        ]
    },
    {
        name: "nancy",
        description: "helloo",
        children: [
            {
                name: "john",
                description: "how are you?",
                children: [
                    {
                        name: "princy",
                        description: "hello, i am good",
                    }
                ]
            }

        ]
    },
    {
        name: "nancy",
        description: "helloo",
        children: [
            {
                name: "john",
                description: "how are you?",
               
            }

        ]
    },
];

const Comment = () => {
  return (
    <div className=''>
          <ul>
              {
                  comments.map((c,index) => {
                      return <Commentlist key={index} name={c.name} description={c.description} children={c.children} />
                      
                  })
              }
          </ul>
      
    </div>
  )
}

export default Comment
