import { useContext } from "react"
import SwitchButton from "./SwitchButton/SwitchButton"
import styles from "./Switcher.module.css"
import { TypeContext } from "@/contexts/TypeContext";
import { SelectableType } from "@/types/Todo"

export default function Switcher() {
  const context = useContext(TypeContext)
  if (!context) {
    throw new Error("Modal.tsx context error");
  }
  const [type, setType] = context

  const toggleType = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const name = event.currentTarget.name as SelectableType
    setType(name)
  }

  return (
    <div className={ styles.switcher }>
      <SwitchButton title="Note" name="note" isActive={type === "note"} toggleType={toggleType} />
      <SwitchButton title="Memo" name="memo" isActive={type === "memo"} toggleType={toggleType} />
    </div>
  )
}
