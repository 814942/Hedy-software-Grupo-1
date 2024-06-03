import { getBoards } from "@/app/dashboard/actions";

const Boards = async () => {
  const boards = await getBoards();
  return (
    <div>
      <h1>Boards</h1>
      <div>
        {boards.map((board: any) => (
          <div key={board.id}>
            <h2>{board.name}</h2>
            <p>{board.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boards;
