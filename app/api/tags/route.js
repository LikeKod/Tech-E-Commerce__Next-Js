import { NextResponse, NextRequest } from "next/server";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

export const wooApi = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export async function GET(request, res) {
  const { searchParams } = request?.nextUrl;

  const params = Object.fromEntries(searchParams);

  const responseData = {
    tags: [],
  };
  try {
    const { data } = await wooApi.get("products/tags", params);
    responseData.tags = data;
    return NextResponse.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
}