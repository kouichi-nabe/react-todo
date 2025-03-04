import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { TodoContent } from "@/contexts/TodoContext"
import ModalContent from "./ModalContent"

describe("ModalContent", () => {
  it("モーダルを閉じるボタンが動作する", () => {
    const closeModal = vi.fn()
    const mockSetTodo = vi.fn()
    const mockRemoveTodo = vi.fn()

    render(
      <TodoContent.Provider value={[[], mockSetTodo, mockRemoveTodo]}>
        <ModalContent closeModal={closeModal} />
      </TodoContent.Provider>
    )

    const closeBtn = screen.getByTestId("closeModalBtn")
    fireEvent.click(closeBtn)
    expect(closeModal).toHaveBeenCalledTimes(1)
  })

  it("ラジオボタンの変更が動作する", () => {
    const closeModal = vi.fn()
    const mockSetTodo = vi.fn()
    const mockRemoveTodo = vi.fn()

    render(
      <TodoContent.Provider value={[[], mockSetTodo, mockRemoveTodo]}>
        <ModalContent closeModal={closeModal} />
      </TodoContent.Provider>
    )

    const noteRadio = screen.getByTestId("radioNote")
    fireEvent.click(noteRadio)
    expect(noteRadio).toBeChecked()

    const memoRadio = screen.getByTestId("radioMemo")
    fireEvent.click(memoRadio)
    expect(memoRadio).toBeChecked()
  })

  it("テキストエリアのプレースホルダーが選択したタイプに応じて変わる", () => {
    const closeModal = vi.fn()
    const mockSetTodo = vi.fn()
    const mockRemoveTodo = vi.fn()

    render(
      <TodoContent.Provider value={[[], mockSetTodo, mockRemoveTodo]}>
        <ModalContent closeModal={closeModal} />
      </TodoContent.Provider>
    )

    const textarea = screen.getByTestId("textarea")
    expect(textarea).toHaveAttribute("placeholder", "Note")

    const memoRadio = screen.getByTestId("radioMemo")
    fireEvent.click(memoRadio)
    expect(textarea).toHaveAttribute("placeholder", "Memo")
  })

  it("新規TODOが作成される", () => {
    const closeModal = vi.fn()
    const mockSetTodo = vi.fn()
    const mockRemoveTodo = vi.fn()

    render(
      <TodoContent.Provider value={[[], mockSetTodo, mockRemoveTodo]}>
        <ModalContent closeModal={closeModal} />
      </TodoContent.Provider>
    )

    const textarea = screen.getByTestId("textarea")
    fireEvent.change(textarea, { target: { value: "New Task" } })

    const createBtn = screen.getByTestId("createTodoBtn")
    fireEvent.click(createBtn)

    expect(mockSetTodo).toHaveBeenCalledTimes(1)
    expect(mockSetTodo).toHaveBeenCalledWith(expect.arrayContaining([
      expect.objectContaining({
        text: "New Task",
        type: "note"
      })
    ]))
    expect(closeModal).toHaveBeenCalledTimes(1)
  })
})

// https://chatgpt.com/share/67c6ffb7-92e8-800e-b6a8-0f5c159c356d