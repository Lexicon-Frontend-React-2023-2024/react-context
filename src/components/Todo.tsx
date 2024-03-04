import { ReactElement, useContext } from "react";
import { ITodo } from "../interfaces";
import { TodoContext } from "../context/TodoContexProvider";

interface ITodoProps {
  todo: ITodo;
}

export function Todo({ todo }: ITodoProps): ReactElement {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <article id={todo.id}>
      <span>{todo.content}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </article>
  );
}
