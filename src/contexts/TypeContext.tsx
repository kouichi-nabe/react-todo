import { createContext, Dispatch, SetStateAction } from "react"
import { SelectableType } from "@/types/Todo"

type TypeContentType = [
  SelectableType,
  Dispatch<SetStateAction<SelectableType>>
] | null

export const TypeContext = createContext<TypeContentType>(null)