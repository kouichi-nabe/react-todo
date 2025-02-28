import styles from "./SwitchButton.module.scss"

type Props = {
  title: string
  isActive?: boolean
  toggleActive: () => void
}

export default function SwitchButton({ title, isActive = false, toggleActive }: Props) {
  return (
    <div className={ styles.wrapper }>
      {
        isActive ? 
        ( <button onClick={toggleActive} type="button" className={ `${styles.button} ${styles.activeButton}` }>{title}</button> ) : 
        ( <button onClick={toggleActive} type="button" className={ styles.button }>{title}</button> )
      }
    </div>
  )
}
