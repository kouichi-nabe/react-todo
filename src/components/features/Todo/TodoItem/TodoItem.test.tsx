import { render, screen, fireEvent } from "@testing-library/react"
import { TodoItemType } from "@/types/Todo"
import { TodoContent } from "@/contexts/TodoContext"
import TodoItem from "./TodoItem"
// import { describe, expect, test, vi } from "vitest"

describe("TodoItem コンポーネント", () => {
  const mockRemoveTodo = vi.fn()

  const mockTodo: TodoItemType = {
    id: "1",
    text: "テストのTodo",
    created: new Date(),
    type: "note"
  }

  const renderWithContext = (todo: TodoItemType) => {
    return render(
      <TodoContent.Provider value={[[], vi.fn(), mockRemoveTodo]}>
        <TodoItem todo={todo} />
      </TodoContent.Provider>
    )
  }

  test("TodoItemが正しくレンダリングされる", () => {
    renderWithContext(mockTodo)

    // Todoのテキストが表示されることを確認
    expect(screen.getByText("テストのTodo")).toBeInTheDocument()

    // 日付が適切に表示されることを確認
    const createdDate = new Date(mockTodo.created)
    const expectedDate = createdDate.toLocaleDateString()
    expect(screen.getByText(expectedDate)).toBeInTheDocument()
  })

  test("削除ボタンをクリックすると removeTodo が呼ばれる", () => {
    renderWithContext(mockTodo)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    // removeTodo が呼ばれたことを確認
    expect(mockRemoveTodo).toHaveBeenCalledTimes(1)
    expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id)
  })
})
