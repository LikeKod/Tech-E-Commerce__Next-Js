import { NextResponse} from "next/server";
const http = require("http");

export async function POST(request) {
    const postData = await request.json();
    const userData = JSON.stringify(postData);

    const res = await fetch("https://magazic.ru/wp-json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: userData,
    });

    const data  = await res.json();
    return new NextResponse(JSON.stringify(data));
}