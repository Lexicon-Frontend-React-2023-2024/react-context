import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoContext } from "../context/TodoContexProvider";
import { ITodo } from "../interfaces";

export function CreateTodo(): ReactElement {
  const [value, setValue] = useState("");
  const { createTodo } = useContext(TodoContext);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      content: value,
    };

    console.log(newTodo);

    // Invoke function in context
    createTodo(newTodo);
    setValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo">To do</label>
      <input
        id="todo"
        onChange={(event) => setValue(event.target.value)}
        type="text"
        value={value}
      />
      <button type="submit">Create</button>
    </form>
  );
}
