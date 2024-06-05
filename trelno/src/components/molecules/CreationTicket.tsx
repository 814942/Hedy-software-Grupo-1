import { Plus } from 'lucide-react';

const CreationTicket = ({ handleAddTicket }: { handleAddTicket: () => void }) => {
    return (
        <div 
            className="flex m-4 gap-2 items-center hover:cursor-pointer hover:bg-gray p-4 rounded-xl mb-4"
            onClick={handleAddTicket}    
        >
            <Plus />
            <p>Añade otra lista</p>
        </div>
    );
  };
  
  
  export default CreationTicket