import { NextResponse } from "next/server"
import {client} from "@/sanity/lib/client"

export const GET = async () => {
const data = await client.fetch(`*[_type == "products"]`, {}, {
    cache: "no-store",
});
// console.log(data)
    return NextResponse.json({  message: "success", data });
}