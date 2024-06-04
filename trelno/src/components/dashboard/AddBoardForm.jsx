"use client";
import { createBoard } from "@/app/dashboard/actions";

const AddBoardModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const formRef = useRef < HTMLFormElement > null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      formData.append("userid", userId);
      // await addPost(formData);
      formRef.current.reset();
      closeModal();
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Post
      </button>
      {isOpen && (
        <dialog open={isOpen} onClose={closeModal} className="w-96">
          <div className="p-4 bg-white">
            <h2 className="text-xl font-bold mb-4">Add Board</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="title" // Agrega el atributo name
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default AddBoardModal;
