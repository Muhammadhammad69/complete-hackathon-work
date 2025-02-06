import { NextResponse } from "next/server"
import {client} from "@/sanity/lib/client"

export const GET = async () => {
    try {
        const data = await client.fetch(`*[_type == "products"]`, {}, {
            cache: "no-store",
        });
        // console.log(data)
            return NextResponse.json({ success: true, message: "success", data },{status:200});
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ success: true, message: "Internal Server Error" }, {status:500});
    }

}