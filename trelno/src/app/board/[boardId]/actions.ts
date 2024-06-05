"use server"

import { IBoardData } from "@/interfaces/board.interface";
import { createClient } from "@/utils/supabase/server";

export async function getContainers(id: number): Promise<IBoardData[] | []> {
  const supabase = createClient();

  console.log("el id que llega al getContainer: ", id);

  try {
    const { data: containers } = await supabase
      .from("container")
      .select("*, tickets(*)")
      .eq("boardid", id);
    return containers!;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addContainer(newContainer: any) {
  const supabase = createClient();
  const data = {
    name: newContainer.name,
    boardid: newContainer.boardid,
  };

  const { error } = await supabase.from("container").insert([data]);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Container added");
  }
}

export async function updateContainer(containerId: number, data: any) {
  const supabase = createClient();
  const { error } = await supabase
    .from("container")
    .update(data)
    .eq("id", containerId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Container updated");
  }
}

export async function deleteContainer(containerId: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("container")
    .delete()
    .eq("id", containerId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Container deleted");
  }
}

export async function getTickets(containerId: number) {
  const supabase = createClient();

  try {
    const { data: tickets } = await supabase
      .from("tickets")
      .select("*")
      .eq("containerid", containerId);

    return tickets;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addTicket(newTicket: any) {
  console.log(newTicket)
  const supabase = createClient();
  const data = {
    name: newTicket.name,
    description: newTicket.description,
    containerid: newTicket.containerid,
  };

  const { error } = await supabase.from("tickets").insert([data]);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Ticket added");
  }
}

export async function updateTicket(ticketId: number, data: any) {
  console.log(data)
  const supabase = createClient();
  const { error } = await supabase
    .from("tickets")
    .update(data)
    .eq("id", ticketId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Ticket updated");
  }
}

export async function deleteTicket(ticketId: number) {
  const supabase = createClient();
  const { error } = await supabase.from("tickets").delete().eq("id", ticketId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Ticket deleted");
  }
}

export async function moveTicket(ticketId: number, containerId: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("tickets")
    .update({ containerid: containerId })
    .eq("id", ticketId);

  if (error) {
    console.error(error);
    return false;
  } else {
    console.log("Ticket moved");
  }
}
