import { NextResponse } from "next/server";
import data from "../../../util/db"
export function GET(request) {
    return NextResponse.json(
        data
    )
}

