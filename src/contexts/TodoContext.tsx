import { createContext } from "react"
import { TodoItemType } from "@/types/Todo"

type TodoContextType = [
  TodoItemType[],
  React.Dispatch<React.SetStateAction<Array<TodoItemType>>>,
  (id: string) => void
] | null

export const TodoContent = createContext<TodoContextType>(null)