import { ReactElement, useContext } from "react";
import { TodoContext } from "../context/TodoContexProvider";

export function TodoList(): ReactElement {
  const { todoList } = useContext(TodoContext);

  return (
    <>
      {todoList.map((todo) => (
        <div id={todo.id}>{todo.content}</div>
      ))}
    </>
  );
}
