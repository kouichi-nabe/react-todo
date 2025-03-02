import { useState, useEffect } from "react";
import { TodoItemType } from "@/types/Todo";

export default function useStorage() {
  const initialValue: TodoItemType[] = []

  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem("react-todos");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  const removeTodo = (id: string): void => {
    const deleteId = value.findIndex((todo: TodoItemType) => todo.id === id)
    const newTodos = value.toSpliced(deleteId, 1)
    setValue(newTodos)
  }

  useEffect(() => {
    try {
      localStorage.setItem("react-todos", JSON.stringify(value));
      // localStorage.removeItem("react-todos");
    } catch (error) {
      console.error("Error writing localStorage", error);
    }
  }, [value]);

  return [value, setValue, removeTodo] as const;
}