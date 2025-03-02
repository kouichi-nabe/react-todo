import FormModal from "react-modal"
import styles from "./Modal.module.scss"
import { useEffect, useRef, useState } from "react";

interface ModalProps {
	isOpen: boolean
	closeModal: () => void
}

FormModal.setAppElement('#root');

export default function Modal ({ isOpen, closeModal }: ModalProps) {
  const [selectedType, setSelectedType] = useState("note")
  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedType(event.target.value)
  }

  const capitalizeFirstLetter = (str: string):string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleCreateTodo = () => {
    console.log(textRef.current?.value, selectedType)
  }

  useEffect(() => {
    console.log(selectedType)
  }, [selectedType])

  return (
		<FormModal
			isOpen={isOpen}
			onRequestClose={closeModal}
			className={ styles.modal }
			overlayClassName={ styles.overlay }
		>
			<button onClick={closeModal} className={ styles.modalClose } type="button"></button>
			<div className={ styles.modalContent }>

        {/* ラジオボタン */}
        <div className={ styles.modalRadio }>
          <input
              type="radio"
              value="note"
              checked={selectedType === "note"}
              onChange={handleSelectedChange}
              id="note"
            />
          <label htmlFor="note" className={ selectedType === "note" ? styles.isChecked : "" }>Note</label>

          <input
            type="radio"
            value="memo"
            checked={selectedType === "memo"}
            onChange={handleSelectedChange}
            id="memo"
          />
          <label htmlFor="memo" className={ selectedType === "memo" ? styles.isChecked : "" }>Memo</label>
        </div>

        {/* テキストエリア */}
        <textarea ref={textRef} className={ styles.modalTextArea } rows={6} placeholder={capitalizeFirstLetter(selectedType)} />

        {/* 作成 */}
        <button onClick={handleCreateTodo} className={ styles.modalSubmit } type="button">Create task</button>
      </div>
		</FormModal>
	)
}