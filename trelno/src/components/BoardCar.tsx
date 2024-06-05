import React from "react";
import { FaTrash } from "react-icons/fa";

interface BoardCardProps {
  id: string;
  name: string;
  onDelete: () => void;
}

const BoardCard: React.FC<BoardCardProps> = ({ id, name, onDelete }) => {
  const handleDeleteClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onDelete();
  };

  return (
    <div className="h-48 bg-gray p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 relative flex flex-col justify-end items-center">
      <button
        onClick={handleDeleteClick}
        className=" bg-gray absolute top-2 right-2 text-red-500 "
      >
        <FaTrash color="white" className="bg-gray" />
      </button>
      <h2 className="bg-gray text-lg font-bold text-white mb-2">{name}</h2>
    </div>
  );
};

export default BoardCard;
