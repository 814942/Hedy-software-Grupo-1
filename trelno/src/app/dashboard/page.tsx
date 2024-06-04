import AddBoardModal from "@/components/dashboard/AddBoardForm";
import Boards from "@/components/dashboard/Boards";
import { deleteBoard, getBoards } from "./actions";

const Page = async () => {
  const userId = 1;

  const boards = await getBoards();

  return (
    <div>
      <h1>Dashboard - Board List</h1>
    </div>
  );
};

export default Page;
