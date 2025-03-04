import React from 'react'
import styles from "./ModalContent.module.scss"
import { useContext, useRef, useState } from "react"
import { v4 as uuid } from "uuid"
import { TodoContent } from "@/contexts/TodoContext"
import { TodoItemType, SelectableType } from "@/types/Todo"

interface ModalContentProps {
	closeModal: () => void
}

export default function ModalContent({ closeModal }: ModalContentProps) {

  const context = useContext(TodoContent)
  if (!context) {
    throw new Error("Modal.tsx context error")
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
    return str.charAt(0).toUpperCase() + str.slice(1)
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
    <>
      <button data-testid="closeModalBtn" onClick={closeModal} className={ styles.modalClose } type="button"></button>
      <div className={ styles.modalContent }>

        {/* ラジオボタン */}
        <div className={ styles.modalRadio }>
          <input
              type="radio"
              value="note"
              checked={selectedType === "note"}
              onChange={handleSelectedChange}
              id="note"
              data-testid="radioNote"
            />
          <label htmlFor="note" className={ selectedType === "note" ? styles.isChecked : "" }>Note</label>

          <input
            type="radio"
            value="memo"
            checked={selectedType === "memo"}
            onChange={handleSelectedChange}
            id="memo"
            data-testid="radioMemo"
          />
          <label htmlFor="memo" className={ selectedType === "memo" ? styles.isChecked : "" }>Memo</label>
        </div>

        {/* テキストエリア */}
        <textarea ref={textRef} className={ styles.modalTextArea } rows={6} placeholder={capitalizeFirstLetter(selectedType)} data-testid="textarea" />

        {/* 作成 */}
        <button data-testid="createTodoBtn" onClick={handleCreateTodo} className={ styles.modalSubmit } type="button">Create task</button>
      </div>
    </>
  )
}
