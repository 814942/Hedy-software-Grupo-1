import { getContainers, getTickets } from "./actions";

const BoardPage = async ({ params }) => {
  const boardId = params.boardId;
  const containers = await getContainers(boardId);
  const tickets = await getTickets(1);
  console.log("Los containers es este board son: ", containers);
  console.log("Los tickets en el container seleccionado son: ", tickets);

  return (
    <div>
      <p>Board Id: {boardId}</p>
    </div>
  );
};

export default BoardPage;
