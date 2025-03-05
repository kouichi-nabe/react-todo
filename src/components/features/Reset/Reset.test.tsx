import { render, screen, fireEvent } from "@testing-library/react";
import { TodoContent } from "@/contexts/TodoContext";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Reset from "./Reset";

describe("Reset Component", () => {
  const mockRemoveTodo = vi.fn()

  it("コンポーネントが正しくレンダリングされる", () => {
    const mockSetTodos = vi.fn();
    render(
      <TodoContent.Provider value={[[], mockSetTodos, mockRemoveTodo]}>
        <Reset />
      </TodoContent.Provider>
    );

    expect(screen.getByTestId("reset")).toBeInTheDocument();
  });

  it("リセットボタンを押したときにタスクがクリアされる", () => {
    const mockSetTodos = vi.fn();
    vi.spyOn(window, "confirm").mockImplementation(() => true);

    render(
      <TodoContent.Provider value={[[], mockSetTodos, mockRemoveTodo]}>
        <Reset />
      </TodoContent.Provider>
    );

    fireEvent.click(screen.getByTestId("reset"));

    expect(window.confirm).toHaveBeenCalledWith("タスクをすべて消しますか？");
    expect(mockSetTodos).toHaveBeenCalledWith([]);
  });

  it("リセットの確認ダイアログでキャンセルした場合、タスクはクリアされない", () => {
    const mockSetTodos = vi.fn();
    vi.spyOn(window, "confirm").mockImplementation(() => false);

    render(
      <TodoContent.Provider value={[[], mockSetTodos, mockRemoveTodo]}>
        <Reset />
      </TodoContent.Provider>
    );

    fireEvent.click(screen.getByTestId("reset"));

    expect(window.confirm).toHaveBeenCalledWith("タスクをすべて消しますか？");
    expect(mockSetTodos).not.toHaveBeenCalled();
  });
});
