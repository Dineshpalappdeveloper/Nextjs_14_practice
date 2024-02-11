import { NextResponse } from "next/server";
import data from "../../../util/db"
export function GET(request) {
    return NextResponse.json(
        data
    )
}

export async function POST(request) {
    try {
        const body = await request.json() // Parse the request body as JSON

        if (!body.name || !body.email) {
            return new NextResponse({ error: "name and email required" }, { status: 400 })
        }

        return new NextResponse({ Message: "User Created" }, { status: 201 })
    } catch (error) {
        console.error("Error parsing request body:", error)
        return new NextResponse({ error: "Internal Server Error" }, { status: 500 })
    }
}
