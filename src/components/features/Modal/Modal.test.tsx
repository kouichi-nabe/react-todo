import { TodoContent } from "@/contexts/TodoContext";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Modal from "./Modal";
import useLocalStorage from "@/hooks/useLocalStorage"
import FormModal from "react-modal"

beforeAll(() => {
  const root = document.createElement('div')
  root.id = 'root'
  document.body.appendChild(root)
  FormModal.setAppElement('#root')
})

describe("Modal コンポーネント", () => {
  const mockCloseModal = vi.fn();
  const [ ,, removeTodo ] = useLocalStorage()

  const renderContext = (isOpen: boolean) => {
    return render(
      <TodoContent.Provider value={[[], vi.fn(), removeTodo]}>
        <Modal isOpen={isOpen} closeModal={mockCloseModal} />
      </TodoContent.Provider>
    );
  };

  test("Todoが正しく作れるか", async () => {
    renderContext(true)

    const createTodoBtn = screen.getByTestId("createTodoBtn")
    const radioNote = screen.getByTestId("radioNote")
    const textarea = screen.getByTestId("textarea")
    await userEvent.type(textarea, 'Todo作成テキスト')
    fireEvent.click(radioNote)
    fireEvent.click(createTodoBtn)

    expect(screen.getByText("Todo作成テキスト")).toBeInTheDocument()
  })
})