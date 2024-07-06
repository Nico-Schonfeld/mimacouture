import revalidateCache from "@/utils/cache/revalidateCache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    revalidateCache("productsTag");

    return NextResponse.json({ success: true, error: false }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: true }, { status: 500 });
  }
}
