import styles from "./Todo.module.scss"
import TodoItem from "./TodoItem/TodoItem"
import { TodoItemType } from "@/types/Todo"
import { v4 as uuid } from "uuid";

const Notes: TodoItemType[] = [
  {
    id: uuid(),
    text: "ダミーテキスト",
    created: new Date(),
    type: "note"
  },
  {
    id: uuid(),
    text: "ダミーテキスト",
    created: new Date(),
    type: "memo"
  }
]

export default function Todo() {
  return (
    <div className={ styles.container }>
      <ul className={ styles.list }>
        {
          Notes.map((note: TodoItemType) => {
            return (
              <TodoItem todo={note} key={note.id} />
            )
          })
        }
      </ul>
    </div>
  )
}
