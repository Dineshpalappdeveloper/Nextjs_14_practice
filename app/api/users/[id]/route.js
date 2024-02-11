
import { NextResponse } from "next/server";
import users from "../../../../util/db"
export function GET(request, context) {
    console.log(context.params.id);
    const data = users.filter((item) => item.id == context.params.id)
    return NextResponse.json(
        data.length == 0 ? {
            result: "Data not found",
            status: 400
        } : {
            result: data,
            status: 200
        }
    )
}
