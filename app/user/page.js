"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { Component } from 'react'

class page extends Component {

    componentDidMount() {
        // console.log(window.location.pathname, "233543");

        // redirect("/dashboard")

    }
    userdata = () => {

        console.log(window.location.pathname, "233543");

    }
    render() {
        return (
            <div>
                <p>
                    {
                    }
                </p>
                <p>
                    <div onClick={this.userdata}>page</div>
                    <Link href="/" >home</Link>

                </p>
            </div>
        )
    }
}

export default page