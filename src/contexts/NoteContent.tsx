import { createContext } from "react"
import { TodoItemType } from "@/types/Todo"

type ContextType = [
  TodoItemType[],
  React.Dispatch<React.SetStateAction<Array<TodoItemType>>>
] | null

export const NoteContent = createContext<ContextType>(null)