"use server";

import { setProductParams } from "./lib/data";
import { revalidatePath } from "next/cache";
import Auth from "@auth/core";
import WordPress from "@auth/core/providers/wordpress";
import { POST_USERS_ENDPOINT } from "./lib/constants/endpoints";

export async function setParams(formData) {
  const id = formData.get("tagId");
  setProductParams(id);
  revalidatePath("/");
}

export async function authenticate(formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function registerNewUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  const regData = {
    email: email,
    password: password,
    username: username,
  };

  const res = await fetch(POST_USERS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("Failed to register new user");
  }

  try {
    const data = await res.json();
    console.log("🚀 ~ registerNewUser ~ data:", data)
    return data
    // Обработка данных
  } catch (error) {
    console.log("Failed to parse JSON response:", error);
  }
}


