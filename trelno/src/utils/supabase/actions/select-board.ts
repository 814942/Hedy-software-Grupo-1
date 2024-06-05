"use server"

import { createClient } from "../server";

export const selectBoard = async () => {
    const supabase = createClient();
    const { data: boards, error } = await supabase.from("board").select("*");
    if (error) {
        console.error("Error fetching boards:", error);
        return;
      }

    return boards;
}