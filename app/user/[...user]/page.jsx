"use client"
import React from 'react'

const page = ({ params }) => {
  console.log(params.user);
  return (
    <div>Welcome user
      you childrens are {
        params.user.map((item, index) => {
          return <div key={index}>
            <span>you child name id {index} :-
              you nick name is :- {item[0]}
            </span>

          </div>
        })
      }

    </div>
  )
}

export default page