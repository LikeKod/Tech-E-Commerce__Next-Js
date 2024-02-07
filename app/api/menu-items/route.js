import { NextResponse, NextRequest } from "next/server";

export const ourUsername = process.env.WP_API_KEY;
export const ourPassword = process.env.WP_API_PASS;

export async function GET() {
  try {
    const res = await fetch("https://magazic.ru/wp-json/wp/v2/menu-items?menus=76", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${ourUsername}:${ourPassword}`).toString("base64"),
      },
    });
    const data = await res.json();
    return Response.json({ data });
  } catch (error) {
    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}


