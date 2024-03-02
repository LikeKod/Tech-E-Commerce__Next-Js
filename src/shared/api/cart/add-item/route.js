import {NextResponse} from "next/server";

export async function POST(request, res) {


    const { cartParams } = request?.nextUrl;
    try {
        const res = await fetch(`https://magazic.ru/wp-json/wc/store/cart/add-item`,{
            method: "post",
            headers:{
                "content-type" : "application/json",
                "X-WC-Store-API-Nonce": "9a7af1e83b"
            },
            body:{
                "id": "323",
                "quantity": "5"
            }
        });        const data  = await res.json();
        console.log(data)
        return new NextResponse(JSON.stringify(data));
    } catch (error) {
        return error.message
    }
}