// components/BoardCard.tsx
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';

interface BoardCardProps {
  id: string;
  name: string;
  image: string;
  onClick?: () => void;
  onDelete?: () => void; // Nueva propiedad para manejar la eliminación
}

const BoardCard: React.FC<BoardCardProps> = ({ id, name, image, onClick, onDelete }) => {
  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault(); // Evitar que se propague el evento al contenedor padre
     // Prevenir la redirección por defecto
    if (onDelete) {
      onDelete(); // Llamar a la función de eliminación si está definida
    }
  };

  return onClick ? (
    <div onClick={onClick}>
      <div 
        className="relative bg-cover bg-center h-48 rounded-lg shadow-md p-4 cursor-pointer hover:bg-opacity-75 flex items-end" 
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Contenido del card */}
        <div className="bg-white bg-opacity-75 w-full text-center py-2">
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Link href={`/boards/${id}`} passHref>
        <div 
          className="relative bg-cover bg-center h-48 rounded-lg shadow-md p-4 cursor-pointer hover:bg-opacity-75 flex items-end" 
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Ícono de basura */}
          <div className="absolute top-2 right-2 cursor-pointer" onClick={handleDelete}>
            <FaTrash color='white' />
          </div>
          {/* Contenido del card */}
          <div className="bg-white bg-opacity-75 w-full text-center py-2">
            <h2 className="text-xl font-semibold">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BoardCard;
