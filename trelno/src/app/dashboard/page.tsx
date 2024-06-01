import { createClient } from "@/utils/supabase/server";
import React from "react";

const page = async () => {
  const supabase = createClient();
  const { data: boards } = await supabase.from("board").select("*");

  console.log(boards);

  return (
    <div>
      <h1>Boards</h1>
      <ul>
        {boards?.map((board: any) => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
