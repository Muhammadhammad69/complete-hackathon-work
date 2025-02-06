import { NextResponse, NextRequest } from "next/server";
import { LoginSchema } from "@/app/api/(auth)/authSchema";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

import {SignJWT} from "jose"
const sanityData = async () => {

    const data = client.fetch(`*[_type == "users"]{_id,name,email,password}`, {}, { cache: "no-store" });
    return data;
}
const SECRET_KEY = process.env.TOKEN_KEY!;
const key = new TextEncoder().encode(SECRET_KEY);
export async function POST(request: NextRequest) {
    let body;
    try {
        body = await request.json()

    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ success: false, message: "Request Body is required" }, { status: 400 });
    }
    const { email, password } = body;
    const result = LoginSchema.safeParse({ email, password });
    if (!result.success) {
        return NextResponse.json({ success: false, message: "Email or Password  is invalid" }, { status: 401 });
    }
    let respData;
    try {
        respData = await sanityData();
        // console.log("resData", respData);
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ success: false, message: "Internal Server Error Plaase Try Again Later" }, { status: 500 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = respData.find((item: any) => item.email === email);
    // console.log("user", user);
    if (!user) {
        return NextResponse.json({ success: false, message: "Email or Password  is invalid" }, { status: 401 });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    // console.log("passwordMatch", passwordMatch);
    if (!passwordMatch) {
        return NextResponse.json({ success: false, message: "Email or Password  is invalid" }, { status: 401 });
    }
    const tokenData = {
        name: user.name,
        email: user.email,
        id: user._id,
    }
    
    const token = await new SignJWT(tokenData).setProtectedHeader({ alg: "HS256" }).setIssuedAt().sign(key);
    const response = NextResponse.json({ success: true, message: "Login success" }, { status: 200 });
    response.cookies.set("token", token, { httpOnly: true });
    return response;

}