import styles from "./Todo.module.scss"
import TodoItem from "./TodoItem/TodoItem"
import { TodoItemType } from "@/types/Todo"
import useLocalStorage from "@/hooks/useLocalStorage"

// const Notes: TodoItemType[] = [
//   {
//     id: uuid(),
//     text: "ダミーテキスト Note",
//     created: new Date(),
//     type: "note"
//   },
//   {
//     id: uuid(),
//     text: "ダミーテキスト Memo",
//     created: new Date(),
//     type: "memo"
//   }
// ]

export default function Todo() {
  const [todos,] = useLocalStorage()

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
