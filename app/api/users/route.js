import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(request) {
  const postData = await request.json();
  const srtingified = JSON.stringify(postData);

  try {
    const response = await axios.post("https://magazic.ru/wp-json/userapi/v1/create-user", srtingified, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return new NextResponse(JSON.stringify(response.data));
  } catch (error) {
    // Обработка ошибки, если запрос не удался
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}