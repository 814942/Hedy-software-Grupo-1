"use server"

import { createClient } from "../server";

export const selectBoard = async () => {
    const supabase = createClient();
    // console.log(supabase)
    const { data: boards, error } = await supabase.from("board").select("*");
    console.log(boards)
    if (error) {
        console.error("Error fetching boards:", error);
        return;
      }

    console.log(boards);
    return boards;
}