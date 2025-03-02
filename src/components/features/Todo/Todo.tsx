import styles from "./Todo.module.scss"
import TodoItem from "./TodoItem/TodoItem"
import { TodoItemType } from "@/types/Todo"
import { NoteContent } from "@/contexts/NoteContent";
import { useContext } from "react";

export default function Todo() {
  const context = useContext(NoteContent)
  if (!context) {
    throw new Error("Modal.tsx context error");
  }
  const [todos,] = context

  return (
    <div className={ styles.container }>
      <ul className={ styles.list }>
        {
          todos.map((note: TodoItemType) => {
            return (
              <TodoItem todo={note} key={note.id} />
            )
          })
        }
      </ul>
    </div>
  )
}
