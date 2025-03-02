import { TypeContext } from "@/contexts/TypeContext"
import { useState } from "react"
import { SelectableType } from "@/types/Todo"
import Switcher from "../Switcher/Switcher"
import Todo from "../Todo/Todo"

export default function BodyContent() {
  const [type, setType] = useState<SelectableType>("note")

  return (
    <TypeContext.Provider value={[type, setType]} >
      <Switcher />
      <Todo />
    </TypeContext.Provider>
  )
}
