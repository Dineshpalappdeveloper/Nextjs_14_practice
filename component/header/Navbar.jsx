"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const Nav = (path) => {
        router.push(path)
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {
                pathname != "/login" ? <div>
                    <Link href='/dashboard'>Dashboard</Link>
                    <br />
                    <Link href='/login'>Login</Link>
                    <br />

                    <Link href='/user'>user</Link>



                </div> : ""
            }
            <br />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "10px" }} className='parent'>
                <h2 onClick={() => Nav("/")}>Home</h2><h2 onClick={() => Nav("login")}>Login</h2><h2 onClick={() => Nav("/dashboard")} >dashboard</h2><h2>HelloUser</h2>
            </div>
        </div>
    )
}

export default Navbar