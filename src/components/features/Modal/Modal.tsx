import FormModal from "react-modal"
import styles from "./Modal.module.scss"
import ModalContent from "./ModalContent/ModalContent"

interface ModalProps {
	isOpen: boolean
	closeModal: () => void
}

FormModal.setAppElement('#root')

export default function Modal ({ isOpen, closeModal }: ModalProps) {

  return (
		<FormModal
			isOpen={isOpen}
			onRequestClose={closeModal}
			className={ styles.modal }
			overlayClassName={ styles.overlay }
		>
			<ModalContent closeModal={closeModal} />
		</FormModal>
	)
}