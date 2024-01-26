import { Router } from 'next/navigation'
import React from 'react'
export function routers(id) {
    Router.push(id)
}
const route = () => {
    return (
        <div>route</div>
    )
}

export default route