import { useContext } from "react";
import styles from "./Reset.module.scss"
import { TodoContent } from "@/contexts/TodoContext";

export default function Reset() {
  const todoContext = useContext(TodoContent)
  if (!todoContext) {
    throw new Error("Reset.tsx context error");
  }
  const [, setTodos, ] = todoContext

  const handelReset = () => {
    if (window.confirm("タスクをすべて消しますか？")) {
      setTodos([])
    }
  }

  return (
    <div className={ styles.container }>
      <button className={ styles.btn } onClick={handelReset} type="button" data-testid="reset">Reset</button>
    </div>
  )
}
