import { useContext } from "react";
import { TodoContext } from "../context/TodoContexProvider";
import { TodoList } from "./TodoList";

export function App() {
  const { todoList } = useContext(TodoContext);

  return (
    <>
      {todoList.map((todo) => (
        <div id={todo.id}>{todo.content}</div>
      ))}
      <TodoList />
    </>
  );
}
