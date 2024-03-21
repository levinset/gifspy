//import libararies
import { IoClose } from "react-icons/io5";
import { DeleteModalProps } from "../../types/ModalTypes";

//main componnet
export default function DeleteConfirmationModal({
  onClose,
  handleDelete,
}: DeleteModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-8 bg-black rounded-lg opacity-85"
      >
        <div className="flex flex-row justify-end">
          <button
            className="text-2xl text-white hover:scale-110 hover:text-red-500"
            onClick={onClose}
          >
            <IoClose />
          </button>
        </div>
        <p className="mb-4 font-semibold text-white">
          Delete your Favorite Gif ?
        </p>
        <div className="flex flex-row justify-center">
          <button
            className="flex flex-row items-center justify-center px-4 py-2 font-semibold text-white bg-red-500 rounded-full hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
