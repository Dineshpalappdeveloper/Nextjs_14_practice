"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from "../../redux/feature/Users/NewUserSlice"
import Link from 'next/link'
const AddUser = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const addUserS = () => {
        dispatch(addUser(name))
    }
    return (
        <div>

            <input type='text' name='user' placeholder='Add new User' onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <button style={{ width: "200px" }} onClick={() => addUserS()} >Add User</button>
            <Link href="/pages/remove">Remove User Page</Link>
        </div>
    )
}

export default AddUser