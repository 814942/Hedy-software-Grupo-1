"use client"

import React, { FC, useEffect, useState } from 'react';

import Ticket from '@/components/molecules/Ticket';

import { Container } from '@/components/organisms/Containers';

import { IBoardData, ITicket } from '@/interfaces/board.interface';
import Modal from '@/components/molecules/Modal';
import { addContainer, addTicket, deleteContainer, deleteTicket, getContainers, updateTicket } from './actions';

interface IBoardProps {
    params: { boardId: string };
}

const Board = ({ params }: IBoardProps) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [ticketToEdit, setTicketToEdit] = useState<ITicket | null>(null)
    const [isNewContainer, setIsNewContainer] = useState<boolean>(false)
    const [newContainers, setNewContainers] = useState<string>('')
    const [data, setData] = useState<IBoardData[]>([])

    const handleNewTicket = async (name: string, containerid: number, description: string='') => {
        await addTicket({
            name,
            description,
            containerid,
        })
        initialData()
    }

    const handleEditTicket = (id: number, containerId: number) => {
        const containerToEdit = data.find((container: IBoardData) => container.id === containerId)
        const tiketToEdit = containerToEdit?.tickets.find((ticket: ITicket) => ticket.id === id)
        setTicketToEdit(tiketToEdit!)
        setIsOpenModal(true)
    }

    const handleUpdateTicket = async (containerid: number, ticket: ITicket) => {
        await updateTicket(containerid, ticket)
        initialData()
    }

    const handleDeleteTicket = async (id: number) => {
        await deleteTicket(id)
        initialData()
    }

    const handleNewInputContainer = (value: string) => {

        setNewContainers(value)
    }

    const handleNewContainer = async (e: any) => {
        if (e.key === "Enter") {
            await addContainer({
                name: newContainers,
                boardid: params.boardId
            })
            setNewContainers('')
            initialData()
        }
    }

    const handleDeleteContainer = (id: number) => {
        deleteContainer(id)
        initialData()
    }

    const initialData = async () => {
        setData(await getContainers(Number(params.boardId)))
    }

    useEffect(() => {
        initialData()
    }, [])

    return (
        <section className='text-white bg-red-primary'>
            <div className='flex h-screen p-4 gap-4 overflow-x-scroll'>
                {
                    data.length ? data.map((container: IBoardData) => {
                        return (
                            <div key={container.id}>
                                <Container
                                    id={container.id}
                                    name={container.name}
                                    addNewTicket={handleNewTicket}
                                    deleteContainer={handleDeleteContainer}
                                >
                                {
                                    container.tickets.length ? container.tickets.map((ticket: ITicket) => {
                                        return (
                                            <Ticket 
                                                key={ticket.id!}
                                                id={ticket.id!}
                                                containerId={container.id}
                                                title={ticket.name}
                                                editTicket={handleEditTicket}
                                            />
                                        )
                                    })
                                    : <p className='p-4 ml-4'>Not data found</p>
                                }
                                </Container>
                            </div>
                        )
                    })
                    : <p>Loading...</p>
                }
                <div
                className="bg-grey p-4 h-fit w-[400px] text-center cursor-pointer rounded-xl mb-4 hover:bg-black"
                
                >
                <div onClick={() => setIsNewContainer(!isNewContainer)}>
                    Add container
                </div>
                {
                    isNewContainer &&
                    <div className="bg-grey p-4 m-4 rounded-xl mb-4">
                        <input
                        className="bg-gray"
                        type="text"
                        placeholder="Introduce un titulo para esta tarjeta"
                        value={newContainers}
                        onChange={(e) => handleNewInputContainer(e.target.value)}
                        onKeyDown={handleNewContainer}
                        />
                  </div>
                }
                </div>
                <Modal 
                    show={isOpenModal}
                    onClose={() => setIsOpenModal(false)}
                    ticket={ticketToEdit}
                    deleteTicket={handleDeleteTicket}
                    updateTicket={handleUpdateTicket}
                />
        </div>
        </section>
  );
};


export default Board
