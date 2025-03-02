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

  useEffect(() => {
    // localStorage.removeItem("react-todos");
    try {
      localStorage.setItem("react-todos", JSON.stringify(value));
      console.log("localStorage:",  localStorage.getItem("react-todos"))
    } catch (error) {
      console.error("Error writing localStorage", error);
    }
  }, [value]);

  return [value, setValue] as const;
}