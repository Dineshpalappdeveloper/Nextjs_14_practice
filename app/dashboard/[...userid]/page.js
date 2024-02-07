"use client"
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    console.log("params", params.userid);
    console.log("pathname", pathname);
    console.log("searchParams", searchParams);
    console.log("router", window.location.pathname);
    return (
        <div> all page missing

        </div>
    )
}

export default page