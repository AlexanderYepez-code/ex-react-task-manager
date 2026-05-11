import {createPortal} from "react-dom";

export default function Modal({
  title,
  content,
  show,
  onClose,
  onConfirm,
  confirmText,
}) {
  if (!show) return null;

  return createPortal (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
        
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            {content}
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300"
          >
            Annulla
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
}