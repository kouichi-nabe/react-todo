import React, { useContext }  from "react"
import styles from "./TodoItem.module.scss"
import { TodoItemType } from "@/types/Todo"
import { TodoContent } from "@/contexts/TodoContext"

type TodoItemProps = {
  todo: TodoItemType
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const todoContext = useContext(TodoContent)
  if (!todoContext) {
    throw new Error("Todo.tsx context error");
  }
  const [ , , removeTodo ] = todoContext

  const text = todo.text
  const created = new Date(todo.created)
  const year = created.getFullYear()
  const month = String(created.getMonth() + 1).padStart(2, "0")
  const day = String(created.getDate()).padStart(2, "0")
  const dateTime = `${year}-${month}-${day}`
  const timeText = created.toLocaleDateString()

  const handleClick = () => {
    removeTodo(todo.id)
  }

  return (
    <li className={ styles.item }>
      <p className={ styles.text }>{text}</p>
      <time className={ styles.date } dateTime={dateTime}>{timeText}</time>
      <button type="button" onClick={handleClick} className={ styles.btn }></button>
    </li>
  )
}

export default TodoItem