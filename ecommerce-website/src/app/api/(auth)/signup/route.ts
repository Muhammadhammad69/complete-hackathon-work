import { NextResponse, NextRequest } from "next/server";
import { signUpSchema } from "../authSchema"
import { client } from "@/sanity/lib/client"
import bcrypt from "bcryptjs"
async function sanityData() {
    const data = await client.fetch(`*[_type == "users"]{email}`, {}, { cache: "no-store" });
    return data;
}
export const POST = async (request: NextRequest) => {
    const body = await request.json();
    // console.log("body", body)
    const { name, email, password } = body;
    const result = signUpSchema.safeParse(body);
    // console.log("result", result);
    if (!result.success) {
        return NextResponse.json({ success: false, message: "Ivalid Credentials" }, { status: 400 });
    }
    const res = await sanityData();
    // console.log("sanityResponse", res);
    let flag = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res.filter((item: any) => {
        if (item.email === email) {
            flag = true
            return;
        }
    });
    if (flag) {
        return NextResponse.json({ success: false, message: "Email Already Exists" }, { status: 409 });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    // console.log("hash", passwordHash);
    try {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        const data = await client.create({
            _type: "users",
            name: name,
            email: email,
            password: passwordHash,
        });

    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ success: false, message: "Internal Server Error Plaase Try Again Later" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "User Created" }, { status: 200 });
}