
import { FC } from 'react';
import BoardCard from '@/components/BoardCar';
import { getBoards } from './actions';
import ClientBoardsPage from './ClientBoardPage';
import Navbar from '@/components/organisms/Navbar';

const BoardsPage: FC = async () => {
  const boards = await getBoards();

  return (
    <>
      <Navbar />
      <ClientBoardsPage boards={boards} />
    </>
  );
};

export default BoardsPage;
