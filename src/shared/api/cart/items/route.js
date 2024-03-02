// import {NextResponse} from "next/server";
//
// export async function GET(request, res) {
//     const { searchParams } = request?.nextUrl;
//     try {
//         const res = await fetch(`https://magazic.ru/wp-json/wc/store/cart/items`,{
//             headers:{
//                 "content-type" : "application/json",
//                 "X-WC-Store-API-Nonce": "9a7af1e83b"
//             }
//         });
//         const data  = await res.json();
//         return new NextResponse(JSON.stringify(data));
//     } catch (error) {
//         return error.message
//     }
// }