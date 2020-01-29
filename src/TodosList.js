import React from "react";
import StoreContext from "./store";
import { useObserver } from "mobx-react";

const TodosList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.todos.map(todo => (
        <li onClick={() => store.removeTodo(todo)} key={todo}>
          {todo}
        </li>
      ))}
    </ul>
  ));
};

export default TodosList;
