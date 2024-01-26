"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { BASE_URL } from "../config/constants"
const page = () => {
  const router = useRouter()
  console.log(process.env.SERVER_PASSWORD);
  return (
    <div>page

      <div>hello
        <h2>{
          BASE_URL
        }</h2>
        <h1 onClick={() => router.push("/login")} >welcome Hero</h1>
      </div>
    </div>
  )
}

export default page