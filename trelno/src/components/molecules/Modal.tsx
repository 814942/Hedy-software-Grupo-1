"use client"

import { updateTicket } from '@/app/board/[boardId]/actions';
import { ITicket } from '@/interfaces/board.interface';
import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface IModalProps {
  show: boolean;
  onClose: () => void;
  ticket: ITicket | null
  deleteTicket: (id: number) => void
  updateTicket: (containerid: number, ticket: ITicket) => void
}

const Modal = ({ show, onClose, ticket, updateTicket, deleteTicket }: IModalProps) => {
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalDescription, setModalDescription] = useState<string>('')

  const handleEditTicket = () => {
    updateTicket(ticket?.id!, {
      name: modalTitle,
      description: modalDescription
    })
    onClose();
  };

  const handleDeleteTicket = () => {
    deleteTicket(ticket?.id!)
    onClose();
  };

  useEffect(() => {
    if (ticket) {
      setModalTitle(ticket.name);
      setModalDescription(ticket.description);
    }
  }, [ticket])

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-secondary bg-opacity-50">
      <div className="w-2/5 h-3/5 bg-grey rounded-lg p-6 shadow-lg relative flex items-center justify-center flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <button
          className="absolute top-2 right-2 text-white hover:text-orange"
          onClick={onClose}
        >
          <CircleX />
        </button>
        <div className='h-1/4 w-full'>
            <input 
                className="text-xl font-bold mb-4 bg-grey p-2 border border-blue rounded-lg"
                value={modalTitle || ''}
                onChange={(e) => setModalTitle(e.target.value)}
            />
        </div>
        <div className='h-3/4 w-full'>
            <textarea 
                className="text-lg bg-grey h-full w-full border border-blue p-4 rounded-lg resize-none"
                value={modalDescription || ''}
                onChange={(e) => setModalDescription(e.target.value)}
            />
        </div>
      <div className='w-full mt-4 flex gap-4'>
        <button
            className="bg-orange hover:bg-white hover:text-orange p-2 rounded-lg shadow-lg transition ease-in-out delay-150"
            onClick={handleEditTicket}
            >
            Save
        </button>
        <button
            className="bg-white text-gray hover:bg-black hover:text-white p-2 rounded-lg shadow-lg transition ease-in-out delay-150"
            onClick={handleDeleteTicket}
            >
            Delete
        </button>
      </div>
      </div>
    </div>
  );
};

export default Modal;
