import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getBoards() {
  try {
    const res = await fetch("http://localhost:3000/api/dashboard");
    const data = await res.json();
    return data.boards;
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
    console.log("Board added");
    revalidatePath("/dashboard");
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
  }
}
