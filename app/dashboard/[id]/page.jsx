"use client"
import axios from 'axios'
// import UserOne from "/UserOne"
import UserOne from "./UserOne"
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
export const getSeoData = async (id) => {

    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return data.data
}
const page = async () => {
    const userData = await getSeoData(9)
    // console.log(params, "params");
    // console.log(userData, "url");
    return (
        <div>dynamic
            <UserOne data={userData} />
        </div>
    )
}

export default page