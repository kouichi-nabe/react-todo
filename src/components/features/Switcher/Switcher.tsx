import { useState } from "react"
import SwitchButton from "./SwitchButton/SwitchButton"
import styles from "./Switcher.module.css"

export default function Switcher() {
  const [ isNoteActive, setIsNoteActive ] = useState(true)
  const toggleActive = (): void => setIsNoteActive(!isNoteActive)

  return (
    <div className={ styles.switcher }>
      <SwitchButton title="Note" isActive={isNoteActive} toggleActive={toggleActive} />
      <SwitchButton title="Memo" isActive={!isNoteActive} toggleActive={toggleActive} />
    </div>
  )
}
