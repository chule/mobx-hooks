import React from "react";
import { StoreProvider } from "./store";
import TodosForm from "./TodosForm";
import TodosList from "./TodosList";
import TodosHeader from "./TodosHeader";

function App() {
  return (
    <StoreProvider>
      <div className="main">
        <TodosHeader />
        <TodosList />
        <TodosForm />
        <p>*click on "todo" to remove</p>
      </div>
    </StoreProvider>
  );
}

export default App;
