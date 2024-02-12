"use client"
import { removeUsers } from '@/redux/feature/Users/NewUserSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RemoveUserPage = () => {
    const users = useSelector((state) => state.user.users)
    const users1 = localStorage.getItem("users")
    console.log(users1);
    const dispatch = useDispatch()

    return (
        <div>
            <p>RemoveUserPage</p>
            {
                users && users.map((item, index) => {
                    return <div key={index} style={{ backgroundColor: "yellow", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        <h1>
                            Name:{
                                item.name
                            }
                        </h1>
                        <p style={{ color: "pink", backgroundColor: "red" }} onClick={() => dispatch(removeUsers(item.id))}  >
                            remove
                        </p>
                    </div>
                })
            }
        </div>
    )
}

export default RemoveUserPage