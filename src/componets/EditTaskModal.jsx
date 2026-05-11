import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {
    return createPortal(
        <div>
            <Modal
                title={'ModificaTask' }
                content={
                    <form>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Titolo
                        </label>
                    </form>
                }
            />
        </div>,
        document.body
    )
}