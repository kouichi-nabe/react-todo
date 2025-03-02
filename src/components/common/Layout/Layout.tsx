import styles from "./Layout.module.css"
import { TodoContent } from "@/contexts/TodoContext"
import useLocalStorage from "@/hooks/useLocalStorage"

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [ todos, setTodos, removeTodo ] = useLocalStorage()

  return (
    <TodoContent.Provider value={[todos, setTodos, removeTodo]} >
      <div className={ styles.layout }>
        <div className={ styles.container }>
          { children }
        </div>
      </div>
    </TodoContent.Provider>
  )
}