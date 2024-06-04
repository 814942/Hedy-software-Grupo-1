"use client"

import { ReactElement, ReactPortal, useState } from "react";
import CreationTicket from "../molecules/CreationTicket";
import NewTicket from "../molecules/NewTicket";

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
}

export const Container = ({ id, name, children, addNewTicket }: IContainerProps) => {
  const [isNewTicket, setIsNewTicket] = useState<boolean>(false)
  const [newTicket, setNewTicket] = useState<string>("")

  const handleNewTicket = (value: string) => {
    setNewTicket(value)
  }

  const handleAddNewTicket = (e: any) => {
    if (e.key === "Enter") {
      console.log(id)
      addNewTicket(newTicket, id)
      setIsNewTicket(false)
    }
  }

  return (
    <div className="rounded-xl bg-black w-[400px] mb-8 overflow-y-scroll">
      <h2 className="p-4 ml-4 font-semibold">{name}</h2>
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
