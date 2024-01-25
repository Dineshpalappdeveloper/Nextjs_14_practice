"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div>page

      <div>hello
        <h1 onClick={() => router.push("/login")} >welcome Hero</h1>
      </div>
    </div>
  )
}

export default page