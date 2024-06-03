import AddBoardModal from "@/components/dashboard/AddBoardForm";
import Boards from "@/components/dashboard/Boards";
import { deleteBoard, getBoards } from "./actions";

const Page = async () => {
  const userId = 1;

  const boards = await getBoards();

  console.log("Los boards son: ", boards);

  // deleteBoard(4);

  return (
    <div>
      <h1>Dashboard - List Boards</h1>
    </div>
  );
};

export default Page;
