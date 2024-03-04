import { createContext, ReactElement, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "../interfaces";

interface IContext {
  createTodo: (newTodo: ITodo) => void;
  deleteTodo: (todoId: string) => void;
  todoList: ITodo[];
}

interface ITodoContextProviderProps {
  children: ReactElement;
}

export const TodoContext = createContext({} as IContext);

export function TodoContextProvider({ children }: ITodoContextProviderProps): ReactElement {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: uuidv4(), content: "Buy food" },
    { id: uuidv4(), content: "Fix car" },
    { id: uuidv4(), content: "Clean" },
  ]);

  const createTodo = (newTodo: ITodo) => {
    // todoList.push(newTodo) // Don't do this, won't work. Here we don't create a new array reference, and therefor React won't notice the change.

    const updatedTodoList = [newTodo, ...todoList]; // Spread syntax, creates a new array with the old todos and the new todo.

    setTodoList(updatedTodoList);
  };

  const deleteTodo = (todoId: string): void => {
    const updatedArray = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedArray);
  };

  const values: IContext = {
    createTodo,
    deleteTodo,
    todoList,
  };

  useEffect(() => {
    // fetch something from external source and save to the state of the Context.
  }, [])

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
