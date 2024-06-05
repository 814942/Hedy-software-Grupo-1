import { FC } from "react";
import BoardCard from "@/components/BoardCar";
import { getBoards } from "./actions";
import ClientBoardsPage from "./ClientBoardPage";
import Navbar from "@/components/organisms/Navbar";
import { createClient } from "@/utils/supabase/server";

const BoardsPage: FC = async () => {
  const boards = await getBoards();
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return (
    <>
      <Navbar />
      <ClientBoardsPage boards={boards} />
    </>
  );
};

export default BoardsPage;
