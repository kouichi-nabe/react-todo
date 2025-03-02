import styles from "./Layout.module.css"
import { NoteContent } from "@/contexts/NoteContent"
import useLocalStorage from "@/hooks/useLocalStorage"

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [ todos, setTodos ] = useLocalStorage()

  return (
    <NoteContent.Provider value={[todos, setTodos]} >
      <div className={ styles.layout }>
        <div className={ styles.container }>
          { children }
        </div>
      </div>
    </NoteContent.Provider>
  )
}