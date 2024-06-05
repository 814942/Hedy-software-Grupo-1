import { FC } from "react";
import { getBoards } from "./actions";
import ClientBoardsPage from "./ClientBoardPage";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const BoardsPage: FC = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const userId = user.id; 

  const boards = await getBoards(userId);

  return (
    <>
      <ClientBoardsPage boards={boards} userId={userId} />
    </>
  );
};

export default BoardsPage;
