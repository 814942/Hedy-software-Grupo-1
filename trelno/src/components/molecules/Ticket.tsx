interface ITicket {
  id: number
  containerId: number
  title: string
  editTicket: (id: number, containerId: number) => void
}

const Ticket = ({ id, containerId, title, editTicket }: ITicket) => {
  return (
    <div className='h-max px-4 text-white'>
      <div 
          className="bg-grey p-4 rounded-xl mb-4 hover:cursor-pointer"
          onClick={() => editTicket(id, containerId)}
      >
          <p>{title}</p>
      </div>
    </div>
  );
};


export default Ticket