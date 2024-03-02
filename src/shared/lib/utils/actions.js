"use server";

import { setProductParams } from "./data";
import { revalidatePath } from "next/cache";

export async function setParams(formData) {
  const id = formData.get("tagId");
  setProductParams(id);
  revalidatePath("/");
}





