import FormModal from "react-modal"
import styles from "./Modal.module.scss"
import { useContext, useRef, useState } from "react";
// import useLocalStorage from "@/hooks/useLocalStorage"
import { v4 as uuid } from "uuid";
import { TodoContent } from "@/contexts/TodoContext";
import { TodoItemType, SelectableType } from "@/types/Todo";

interface ModalProps {
	isOpen: boolean
	closeModal: () => void
}

FormModal.setAppElement('#root');

export default function Modal ({ isOpen, closeModal }: ModalProps) {
  const context = useContext(TodoContent)
  if (!context) {
    throw new Error("Modal.tsx context error");
  }
  const [todos , setTodos] = context
  const [selectedType, setSelectedType] = useState<SelectableType>("note")
  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleSelectedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    if (value === "note" || value === "memo") {
      setSelectedType(value)
    }
  }

  const capitalizeFirstLetter = (str: string):string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleCreateTodo = () => {
    if (textRef.current?.value !== undefined) {
      const newTodo: TodoItemType = {
        id: uuid(),
        text: textRef.current?.value,
        created: new Date(),
        type: selectedType
      }

      setTodos([...todos, newTodo])
      closeModal()
    }
  }

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