import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.tsx";
import { TodoContextProvider } from "./context/TodoContexProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
