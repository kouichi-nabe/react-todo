import React from "react"
import styles from "./TodoItem.module.scss"
import { TodoItemType } from "@/types/Todo"

type TodoItemProps = {
  todo: TodoItemType
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const text = todo.text
  const created = todo.created
  const year = created.getFullYear()
  const month = String(created.getMonth() + 1).padStart(2, "0")
  const day = String(created.getDate()).padStart(2, "0")
  const dateTime = `${year}-${month}-${day}`
  const timeText = created.toLocaleDateString()

  return (
    <li className={ styles.item }>
      <p className={ styles.text }>{text}</p>
      <time className={ styles.date } dateTime={dateTime}>{timeText}</time>
    </li>
  )
}

export default TodoItem