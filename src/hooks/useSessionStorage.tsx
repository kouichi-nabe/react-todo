import { useState, useEffect } from "react";

export default function useSessionStorage<T>(initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem("todos");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading sessionStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem("todos", JSON.stringify(value));
    } catch (error) {
      console.error("Error writing sessionStorage", error);
    }
  }, [value]);

  return [value, setValue] as const;
}