"use client"
import React from 'react'
// import { userDetails } from './layout'
import axios from "axios"
import { Router } from 'next/router'
// import roboto from "../layout"

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})


import Image from 'next/image'
export function navigate(path) {
    Router.push(path)
}
const page = () => {

    return (
        <div> Dynamic page
            <div>
                <h1 className={roboto.className}>Hello Dinesh What are you Doing</h1>
                <h1>Hello Dinesh What are you Doing</h1>
                <Image width={400} height={200} alt='' src="https://rukminim2.flixcart.com/image/832/832/kqo3onk0/watch/p/5/t/shive-ganesh-mata-watch-tarido-original-imag4mzjasmdzhur.jpeg?q=70&crop=false" />
            </div>
        </div>
    )
}

export default page