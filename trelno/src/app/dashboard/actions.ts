'use server'
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export async function getBoards(userId: string) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("board")
      .select("*")
      .eq("userid", userId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addBoard(newBoard: any) {
  const supabase = createClient();
  const data = {
    name: newBoard.name,
    userid: newBoard.user_id,
    status: "Status board-added",
  };

  const { error } = await supabase.from("board").insert([data]);

  if (error) {
    console.error(error);
    return false;
  } else {
    revalidatePath("/dashboard");
    return true;
  }
}

export async function updateBoard(boardId: number, data: any) {
  const supabase = createClient();
  const { error } = await supabase.from("board").update(data).eq("id", boardId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Board updated");
    revalidatePath("/dashboard");
    return true;
  }
}

export async function deleteBoard(boardId: number) {
  const supabase = createClient();
  const { error } = await supabase.from("board").delete().eq("id", boardId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Board deleted");
    revalidatePath("/dashboard");
    return true;
  }
}
