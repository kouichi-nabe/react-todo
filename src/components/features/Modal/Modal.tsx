import FormModal from "react-modal"
import styles from "./Modal.module.scss"

interface ModalProps {
	isOpen: boolean
	closeModal: () => void
}

FormModal.setAppElement('#root');

export default function Modal ({ isOpen, closeModal }: ModalProps) {
  return (
		<FormModal
			isOpen={isOpen}
			onRequestClose={closeModal}
			className={ styles.modal }
			overlayClassName={ styles.overlay }
		>
			<button onClick={closeModal} className={ styles.modalClose } type="button"></button>
			<div className="modal-content">
        サンプル
      </div>
		</FormModal>
	)
}