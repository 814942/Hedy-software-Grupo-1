import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();

  try {
    const { data: boards } = await supabase.from("board").select("*");
    return NextResponse.json({ boards });
  } catch (error) {
    console.error(error);
    return [];
  }
}
