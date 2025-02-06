import {NextResponse } from "next/server";
export const GET = async () => {
    try {
        const response = NextResponse.json({ success: true, message: "Logout successful" }, { status: 200 });
        response.cookies.set("token", "", { httpOnly: true });
        return response;
    } catch (error) {
        console.log("error", error);
       return NextResponse.json({ success: false, message: "Logout Failed" }, { status: 500 });
    }

};