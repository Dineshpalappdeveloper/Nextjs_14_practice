"use client"
import { removeUsers } from '@/redux/feature/Users/NewUserSlice'
import { getUsers } from '@/redux/feature/Users/getUserSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RemoveUserPage = () => {
    const users = useSelector((state) => state.user.users)
    const usersList = useSelector((state) => state.userData.userData)
    const users1 = localStorage.getItem("users")
    console.log(usersList);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>User List</h1>

            <button onClick={() => dispatch(getUsers())} >load Data</button>

            {
                usersList && usersList.data.map((item, index) => {
                    return <div key={index} >
                        <h1>Id:-{item.id} Name:- {item.name}   </h1>
                    </div>
                })
            }
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