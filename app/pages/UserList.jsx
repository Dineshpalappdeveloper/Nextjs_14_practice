"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUsers } from "../../redux/feature/Users/NewUserSlice"
const UserList = () => {
    const users = useSelector((state) => state.user.users)
    const users1 = localStorage.getItem("users")
    console.log(users1);

    const dispatch = useDispatch()
    const onremoveUser = (id) => {
        dispatch(removeUsers(id))
    }
    return (
        <div>
            {
                users && users?.map((item, index) => {
                    return <div key={index} style={{ backgroundColor: "red", display: "flex", justifyContent: "space-around" }} >
                        <h1  >name:{item.name} id: {index}

                        </h1>
                        <span onClick={() => onremoveUser(item.id)}>
                            Remove
                        </span>
                    </div>
                })
            }

        </div>
    )
}

export default UserList