"use client";
import React, { useState, useEffect } from "react";
import BoardCard from "@/components/BoardCar";
import { addBoard, deleteBoard, getBoards } from "./actions";
import Link from "next/link";

const ClientBoardsPage: React.FC<{ boards: any[]; userId: string }> = ({
  boards: initialBoards,
  userId,
}) => {
  const [boards, setBoards] = useState(initialBoards);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");

  useEffect(() => {
    const fetchBoards = async () => {
      const updatedBoards = await getBoards(userId);
      setBoards(updatedBoards);
    };

    fetchBoards();
  }, [userId]);

  const handleCreateClick = () => {
    setIsInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoardName(e.target.value);
  };

  const handleInputSubmit = async () => {
    if (newBoardName.trim() !== "") {
      const newBoard = { name: newBoardName, user_id: userId };
      await addBoard(newBoard);
      // const updatedBoards = await fetch(`/api/dashboard?userid=${userId}`)
      //   .then((res) => res.json())
      //   .then((data) => data.boards);
      const updatedBoards = await getBoards(userId);
      setBoards(updatedBoards);
      setNewBoardName("");
      setIsInputVisible(false);
    }
  };

  const handleCancelClick = () => {
    setIsInputVisible(false);
    setNewBoardName("");
  };

  const handleDeleteBoard = async (id: number) => {
    await deleteBoard(id);
    setBoards((prevBoards) => prevBoards.filter((board) => board.id !== id));
  };

  return (
    <div className="bg-black h-screen">
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Boards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            {isInputVisible ? (
              <div className="w-full bg-gray-800">
                <input
                  type="text"
                  value={newBoardName}
                  onChange={handleInputChange}
                  placeholder="Enter board name"
                  className="w-full p-2 mb-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
                />
                <div className="bg-gray-800 flex justify-between space-x-2 pt-7">
                  <button
                    onClick={handleCancelClick}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-md transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleInputSubmit}
                    className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleCreateClick}
                className="w-full h-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg p-4 transition duration-300"
              >
                <span className="text-lg font-bold">Create New</span>
              </button>
            )}
          </div>
          {boards.map((board: any) => (
            <Link
              href={`/board/${board.id}`}
              key={board.id}
              className="relative"
            >
              <BoardCard
                id={board.id}
                name={board.name}
                onDelete={() => handleDeleteBoard(board.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientBoardsPage;
