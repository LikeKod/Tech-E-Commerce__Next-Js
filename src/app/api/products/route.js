// import { NextResponse, NextRequest } from "next/server";
//
// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
//
// export const wooApi = new WooCommerceRestApi({
//   url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
//   consumerKey: process.env.WC_CONSUMER_KEY,
//   consumerSecret: process.env.WC_CONSUMER_SECRET,
//   version: "wc/v3",
// });
//
// export async function GET(request, res) {
//   const { searchParams } = request?.nextUrl;
//
//   const params = Object.fromEntries(searchParams);
//
//   const responseData = {
//     products: [],
//   };
//   try {
//     const { data } = await wooApi.get("products", params);
//     responseData.products = data;
//     return NextResponse.json(responseData);
//   } catch (error) {
//     responseData.error = error.message;
//     res.status(500).json(responseData);
//   }
// }


// NEW Variant via p-json/wc/store endpoint
import {NextResponse} from "next/server";

export async function GET(request) {
  const { searchParams } = request?.nextUrl;
  try {
    const res = await fetch(`https://magazic.ru/wp-json/wc/store/products?${searchParams}`);
    const data  = await res.json();
    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    return error
  }
}



