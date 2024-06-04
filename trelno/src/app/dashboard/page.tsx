'use server'
import React, { FC } from 'react';
import BoardCard from '@/components/BoardCar';
import { getBoards } from './actions';
import Link from 'next/link';


const BoardsPage: FC = async () => {

  const boards = await getBoards();

  console.log(getBoards)


  return (
    <div>
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Boards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href='/dashboard/create'>
          <BoardCard 
            key={boards[0].id} 
            id={boards[0].id} 
            name='Create New'
          />
          </Link>
          {boards.map((board:any) => (
            <BoardCard 
              key={board.id} 
              id={board.id} 
              name={board.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
