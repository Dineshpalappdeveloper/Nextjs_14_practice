"use client"
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const [data, setData] = useState([])
    const searchparam = useSearchParams()
    const params = useParams()
    const url = usePathname()
    console.log(searchparam, "searchparam");
    console.log(params, "params");
    console.log(url, "url");
    // console.log(window.location.pathname);
    return (
        <div>page</div>
    )
}

export default page