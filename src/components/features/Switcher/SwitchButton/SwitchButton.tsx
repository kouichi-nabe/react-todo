import styles from "./SwitchButton.module.scss"
import { SelectableType } from "@/types/Todo"

type Props = {
  title: string
  name: SelectableType
  isActive?: boolean
  toggleType: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function SwitchButton({ title, name, isActive = false, toggleType }: Props) {
  return (
    <div className={ styles.wrapper }>
      {
        isActive ? 
        ( <button onClick={toggleType} name={name} type="button" className={ `${styles.button} ${styles.activeButton}` }>{title}</button> ) : 
        ( <button onClick={toggleType} name={name} type="button" className={ styles.button }>{title}</button> )
      }
    </div>
  )
}
