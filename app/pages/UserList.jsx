"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
    const users = useSelector((state) => state.user.users)
    console.log(users, "222");
    return (
        <div>
            {
                users && users?.map((item, index) => {
                    return <div key={index}>
                        <h1>name:{item.name} id: {index}</h1>
                    </div>
                })
            }

        </div>
    )
}

export default UserList