import {NextResponse} from "next/server";

export async function GET() {
    try {
        const res = await fetch(`https://magazic.ru/wp-json/wc/store/cart`);
        console.log("async function GET(): ",res)
        const data  = await res.json();
        const nonce  = await res.headers.get('nonce');

        console.log("async function GET(): ",nonce)
        return new NextResponse(JSON.stringify(data, nonce));
    } catch (error) {
        return error.message
    }
}