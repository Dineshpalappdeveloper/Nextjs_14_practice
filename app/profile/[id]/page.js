import { notFound } from 'next/navigation'

async function fetchUser(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) return undefined
    return res.json()
}

export default async function Profile({ params }) {
    const user = await fetchUser(params.id)

    if (!user) {
        notFound()
    }
    // else {
    // notFound()

    // }

    // ...
    return (
        <h1>
            profile page
        </h1>
    )
}