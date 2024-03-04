import { createContext, ReactElement, useState } from "react";

interface IContext {
  todoList: ITodo[];
}

interface ITodo {
  id: string;
  content: string;
}

interface ITodoContextProviderProps {
  children: ReactElement;
}

export const TodoContext = createContext({} as IContext);

export function TodoContextProvider({ children }: ITodoContextProviderProps): ReactElement {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: "1", content: "Buy food" },
    { id: "2", content: "Fix car" },
    { id: "3", content: "Clean" },
  ]);

  const values: IContext = {
    todoList,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
