import { NextRequest, NextResponse } from "next/server";

import { jwtVerify } from "jose";
const SECRET_KEY = process.env.TOKEN_KEY!;
const key = new TextEncoder().encode(SECRET_KEY);
export const GET = async (req: NextRequest) => {
    const token = req.cookies.get("token");

    if (!token) {
        return NextResponse.json({ success: false, message: "Token not found" }, { status: 401 });
    }
    try {
        const { payload } = await jwtVerify(token.value, key);
        // const payload = jwt.verify(token.value, process.env.TOKEN_KEY!);
        // console.log("payload", payload);
        return NextResponse.json({ success: true, message: "Token is valid", data: payload }, { status: 200 });
    } catch (error) {
        console.log("error", error);
        const response = NextResponse.json({ success: false, message: "Token is invalid" }, { status: 401 });
        response.cookies.set("token", "", { httpOnly: true });
        return response;
    }


} 