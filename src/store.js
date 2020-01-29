import React from "react";
import { useLocalStore } from "mobx-react";

const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    todos: [],
    setTodos: arr => {
      store.todos.concat(arr);
    },
    addTodo: input => {
      store.todos.push(input);
      window.localStorage.setItem("myTodos", JSON.stringify(store.todos));
    },
    removeTodo: input => {
      store.todos.splice(store.todos.indexOf(input), 1);
      window.localStorage.setItem("myTodos", JSON.stringify(store.todos));
    },
    get todosCount() {
      return store.todos.length;
    }
  }));

  //React.useEffect(() => {
  let todos = window.localStorage.getItem("myTodos");
  if (todos) {
    store.todos = JSON.parse(todos);
  }
  //}, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreContext;
