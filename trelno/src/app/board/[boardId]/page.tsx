"use client"

import React, { FC, useEffect, useState } from 'react';

import Ticket from '@/components/molecules/Ticket';

import { Container } from '@/components/organisms/Containers';

import { IBoardData, ITicket } from '@/interfaces/board.interface';
import Modal from '@/components/molecules/Modal';
import { selectBoard } from '@/utils/supabase/actions/select-board';

const Board: FC = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [ticketToEdit, setTicketToEdit] = useState<ITicket | null>(null)

    const data: IBoardData[] = [
        {
            id: 1,
            name: "TODO",
            tickets: [
                 {
                    id: 1,
                    title: "Ticket 1",
                    description: "Ticket 1 description"
                },
                {
                    id: 2,
                    title: "Ticket 2",
                    description: "Ticket 2 description"
                },
                {
                    id: 3,
                    title: "Ticket 3",
                    description: "Ticket 3 description"
                },
                {
                    id: 4,
                    title: "Ticket 4",
                    description: "Ticket 4 description"
                },
                {
                    id: 5,
                    title: "Ticket 5",
                    description: "Ticket 5 description"
                },
                {
                    id: 6,
                    title: "Ticket 6",
                    description: "Ticket 6 description"
                },
                {
                    id: 7,
                    title: "Ticket 7",
                    description: "Ticket 8 description"
                },
            ]
        },
        {
            id: 2,
            name: "Done",
            tickets: [
                 {
                    id: 1,
                    title: "Ticket 1",
                    description: "Ticket 1 description"
                },
                {
                    id: 2,
                    title: "Ticket 2",
                    description: "Ticket 1 description"
                },
                {
                    id: 3,
                    title: "Ticket 3",
                    description: "Ticket 1 description"
                }
            ]
        },
        
    ]
    /**
     * El board renderiza una lista de Containers
     * Cada Container renderiza una lista de tickets
     * Containers data debe ser un array de obj containers con id, name y un array de tickets.
     * containers = [ {id: 1: name: TODO, tickets: [ {id: 1, title: "Ticket 1", description: "Ticket 1 description"}]} ]
     */

    const handleNewTicket = (title: string, containerId: number) => {
        const container = data.find((container: IBoardData) => container.id === containerId)
        const newTicket = {
            id: container!.tickets.length + 1,
            title,
            description: ""
        }
        // TODO: create new ticket here
        // data[containerId].tickets.push(newTicket)
    }

    const handleEditTicket = (id: number, containerId: number) => {
        const containerToEdit = data.find((container: IBoardData) => container.id === containerId)
        const tiketToEdit = containerToEdit?.tickets.find((ticket: ITicket) => ticket.id === id)
        setTicketToEdit(tiketToEdit!)
        setIsOpenModal(true)
    }

    const initialData = async () => {
        console.log(await selectBoard())
    }

    useEffect(() => {
        initialData()
    }, [])

    return (
        <section className='p-4 h-full text-white bg-red-primary'>
            <div className='flex gap-4 overflow-x-scroll'>
                {
                    data.length && data.map((container: IBoardData) => {
                        return (
                            <div key={container.id}>
                                <Container
                                    id={container.id}
                                    name={container.name}
                                    addNewTicket={handleNewTicket}
                                >
                                {
                                    container.tickets.length && container.tickets.map((ticket: ITicket) => {
                                        return (
                                            <Ticket 
                                                key={ticket.id}
                                                id={ticket.id}
                                                containerId={container.id}
                                                title={ticket.title}
                                                editTicket={handleEditTicket}
                                            />
                                        )
                                    })
                                }
                                </Container>
                            </div>
                        )
                    })
                }
                <Modal 
                    show={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                    ticket= {ticketToEdit!}
                    setTicket={setTicketToEdit}
                />
            </div>
        </section>
  );
};


export default Board