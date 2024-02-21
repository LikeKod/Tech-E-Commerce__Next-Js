"use server";

import { setProductParams } from "./lib/data";
import { revalidatePath } from "next/cache";

export async function setParams(formData) {
  const id = formData.get("tagId");
  setProductParams(id);
  revalidatePath("/");
}





