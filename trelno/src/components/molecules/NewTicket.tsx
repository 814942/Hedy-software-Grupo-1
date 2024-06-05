"use client"

import { useState } from "react";

const NewTicket = () => {
  const [newTicket, setNewTicket] = useState<string>("")
  const handleNewTicket = (value: string) => {
    setNewTicket(value)
  }
  
  return (
    <div className="bg-gray p-4 m-4 rounded-xl mb-4">
      <input
        className="bg-gray"
        type="text"
        placeholder="Introduce un titulo para esta tarjeta"
        value={newTicket}
        onChange={(e) => handleNewTicket(e.target.value)}
        onKeyDown={(e) => console.log(e)}
      />
    </div>
  );
};


export default NewTicket