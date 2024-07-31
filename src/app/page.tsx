"use server";

import { defaultLocation } from "@/lib/weather";
import { redirect } from "next/navigation";

export default async function Home() {
  return redirect(`/${defaultLocation()}`);
}
