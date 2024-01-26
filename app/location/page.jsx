import React from 'react'
import { getUser } from '../../services/getuser'
import { routers } from "../api/route"
import Link from 'next/link'
const page = async () => {
    let userDetails = await getUser()
    console.log(userDetails);
    // const nav = (id) => {
    //     routers(`https://jsonplaceholder.typicode.com/users${id}`)
    // }
    return (
        <div>location  page

            <h2>
                {
                    userDetails.map((user, index) => {
                        return <Link href=
                            {`/location/${user.id}`} key={index}>
                            <h1>name:{user.name} ; Email :- {user.email}</h1>
                        </Link>
                    })
                }
            </h2>
        </div>
    )
}

export default page