"use client"

import { ReactElement, ReactPortal, useState } from "react";
import CreationTicket from "../molecules/CreationTicket";
import NewTicket from "../molecules/NewTicket";
import { X } from "lucide-react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type IContainerProps = {
  id: number
  name: string
  children: ReactNode
  addNewTicket: (title: string, id: number) => void
  deleteContainer: (id: number) => void

}

export const Container = ({ id, name, children, addNewTicket, deleteContainer }: IContainerProps) => {
  const [isNewTicket, setIsNewTicket] = useState<boolean>(false)
  const [newTicket, setNewTicket] = useState<string>("")

  const handleNewTicket = (value: string) => {
    setNewTicket(value)
  }

  const handleAddNewTicket = (e: any) => {
    if (e.key === "Enter") {
      addNewTicket(newTicket, id)
      setIsNewTicket(false)
    }
  }

  const handleDeleteContainer = () => {
    deleteContainer(id)
  }

  return (
    <div className="rounded-xl bg-black w-[400px] mb-8 overflow-y-scroll">
      <div className="flex items-center justify-between p-4">
        <h2 className="ml-4 font-semibold">{name}</h2>
        <X 
          className="cursor-pointer"
          onClick={handleDeleteContainer}
        />
      </div>
      {children}
      {
        isNewTicket && (
          <div className="bg-gray p-4 m-4 rounded-xl mb-4">
            <input
              className="bg-gray"
              type="text"
              placeholder="Introduce un titulo para esta tarjeta"
              value={newTicket}
              onChange={(e) => handleNewTicket(e.target.value)}
              onKeyDown={handleAddNewTicket}
            />
          </div>
        )
      }
      <CreationTicket
        handleAddTicket={() => setIsNewTicket(!isNewTicket)}
      />
    </div>
  );
};
