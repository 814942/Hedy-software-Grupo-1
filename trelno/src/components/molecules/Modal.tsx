"use client"

import { CircleX } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface IModalProps {
  show: boolean;
  onClose: () => void;
  ticket: {
    id: number
    title: string
    description: string
  }
  setTicket: (a: any) => void
//   children: React.ReactNode;
}

const Modal = ({ show, onClose, ticket, setTicket }: IModalProps) => {
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalDescription, setModalDescription] = useState<string>('')

  if (!show) {
    return null;
  }

  const handleEditTicket = () => {
    setTicket({
      ...ticket,
      title: modalTitle,
      description: modalDescription
    })
    onClose();
  };

  useEffect(() => {
    if (ticket) {
      setModalTitle(ticket.title);
      setModalDescription(ticket.description);
    }
  }, [ticket])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-secondary bg-opacity-50">
      <div className="w-2/5 h-3/5 bg-gray rounded-lg p-6 shadow-lg relative flex items-center justify-center flex-col">
        <button
          className="absolute top-2 right-2 text-white hover:text-orange"
          onClick={onClose}
        >
          <CircleX />
        </button>
        <div className='h-1/4 w-full'>
            <input 
                className="text-xl font-bold mb-4 bg-gray p-2 border border-blue rounded-lg"
                value={modalTitle}
                onChange={(e) => setModalTitle(e.target.value)}
            />
        </div>
        <div className='h-3/4 w-full'>
            <textarea 
                className="text-lg bg-gray h-full w-full border border-blue p-4 rounded-lg resize-none"
                value={modalDescription}
                onChange={(e) => setModalDescription(e.target.value)}
            />
        </div>
      <div className='w-full mt-4'>
        <button
            className="bg-orange hover:bg-white hover:text-orange p-2 rounded-lg shadow-lg transition ease-in-out delay-150"
            onClick={handleEditTicket}
            >
            Save
        </button>
      </div>
      </div>
    </div>
  );
};

export default Modal;
