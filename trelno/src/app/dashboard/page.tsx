import { FC } from "react";
import BoardCard from "@/components/BoardCar";
import { getBoards } from "./actions";
import ClientBoardsPage from "./ClientBoardPage";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const BoardsPage: FC = async () => {
  const boards = await getBoards();
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <>
      <ClientBoardsPage boards={boards} />
    </>
  );
};

export default BoardsPage;
