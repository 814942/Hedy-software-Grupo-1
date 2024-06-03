'use client'
import React, { FC, useState } from 'react';
import BoardCard from '@/components/BoardCar';
interface Board {
  id: string;
  name: string;
  image: string;
}

const BoardsPage: FC = () => {
  const [boards, setBoards] = useState<Board[]>([
    { id: 'create', name: 'Create a new board', image: 'https://source.unsplash.com/random/300x200?sig=1' },
    { id: '2', name: 'Board 2', image: 'https://source.unsplash.com/random/300x200?sig=2' },
    { id: '3', name: 'Board 3', image: 'https://source.unsplash.com/random/300x200?sig=3' },
    { id: '4', name: 'Board 4', image: 'https://source.unsplash.com/random/300x200?sig=4' },
    { id: '5', name: 'Board 5', image: 'https://source.unsplash.com/random/300x200?sig=5' },
    { id: '6', name: 'Board 6', image: 'https://source.unsplash.com/random/300x200?sig=6' },
  ]);

  const handleCreateBoard = () => {
    console.log('Creating a new board...');
    // Aquí puedes agregar la lógica para crear un nuevo board
    // Puede ser una llamada a la API de Supabase o mostrar un modal para crear el board.
  };

  const handleDeleteBoard = (id: string) => {
    console.log('Deleting board with id:', id);
    setBoards(boards.filter(board => board.id !== id));
    // Aquí puedes agregar la lógica para eliminar el board con el id proporcionado
    // Puede ser una llamada a la API de Supabase o cualquier otra lógica de eliminación.
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Boards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BoardCard 
            key={boards[0].id} 
            id={boards[0].id} 
            name={boards[0].name} 
            image={boards[0].image} 
            onClick={handleCreateBoard} 
          />
          {boards.slice(1).map((board) => (
            <BoardCard 
              key={board.id} 
              id={board.id} 
              name={board.name} 
              image={board.image} 
              onDelete={() => handleDeleteBoard(board.id)} // Pasar la función onDelete para manejar la eliminación
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
