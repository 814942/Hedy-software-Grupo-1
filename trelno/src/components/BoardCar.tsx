'use client'
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';

interface BoardCardProps {
  id: string;
  name: string;
  onClick?: () => void;
  onDelete?: () => void; 
}

const BoardCard: React.FC<BoardCardProps> = ({ id, name, onClick, onDelete }) => {
  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (onDelete) {
      onDelete();
    }
  };
  function deleteboard(){
    console.log('elinminar')
  }

  return (
    <div className="bg-gray-400 rounded-lg shadow-md cursor-pointer hover:bg-opacity-75 relative">
      {!onClick && (
        <div className="absolute top-2 right-2" onClick={deleteboard}>
          <FaTrash className="text-white cursor-pointer bg-gray-400" />
        </div>
      )}
      <div className="h-48 bg-gray-400 rounded-lg p-4 flex flex-col justify-end">
        <div className="text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
      </div>
      {onClick && (
        <Link href={`/boards/${id}`} passHref>
          <div className="absolute inset-0 z-10" />
        </Link>
      )}
    </div>
  );
};

export default BoardCard;
