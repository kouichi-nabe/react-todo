import styles from "./Todo.module.scss"
import TodoItem from "./TodoItem/TodoItem"
import { TodoItemType } from "@/types/Todo"
import { TodoContent } from "@/contexts/TodoContext";
import { useContext, useEffect } from "react";
import { TypeContext } from "@/contexts/TypeContext";

export default function Todo() {
  const todoContext = useContext(TodoContent)
  if (!todoContext) {
    throw new Error("Todo.tsx context error");
  }
  const [todos,] = todoContext

  const typeContext = useContext(TypeContext)
  if (!typeContext) {
    throw new Error("Modal.tsx context error");
  }
  const [type,] = typeContext

  return (
    <div className={ styles.container }>
      <ul className={ styles.list }>
        {
          todos.filter((todo: TodoItemType) => {
            return todo.type === type
          })
          .map((note: TodoItemType) => {
            return (
              <TodoItem todo={note} key={note.id} />
            )
          })
        }
      </ul>
    </div>
  )
}
