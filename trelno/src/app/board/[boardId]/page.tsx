import { getContainers, getTickets } from "./actions";

const BoardPage = async ({ params }) => {
  const boardId = params.boardId;
  const containers = await getContainers(boardId);
  const tickets = await getTickets(1);

  return (
    <div>
      <p>Board Id: {boardId}</p>
    </div>
  );
};

export default BoardPage;
