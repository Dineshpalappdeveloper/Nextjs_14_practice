"use client"
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = ({ param }) => {
    const pathname = useParams()
    const [data, setdata] = useState([])
    return (
        <div>
            <h1>
                You User Id :- {pathname.id}
            </h1>
        </div>
    )
}

export default page