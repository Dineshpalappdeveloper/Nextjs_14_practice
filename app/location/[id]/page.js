import { getUser } from '@/services/getuser';
import React from 'react'

const page = async ({ params }) => {

    let userDetails = await getUser()
    console.log(userDetails);
    let data = userDetails.filter((res) => params.id == res.id)
    console.log(data, "helo", data[0].id);
    return (
        <div>

            page
            <p>
                Id: {params.id} Name: {data[0].name} Email : {data[0].email} Phone: {data[0].phone}

            </p>
        </div>
    )
}

export default page
export async function generateStaticParams() {

    let userDetails = await getUser()
    return userDetails.map((res) => {
        id: res.id.toString()
    })
}