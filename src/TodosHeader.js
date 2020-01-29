import React from "react";
import StoreContext from "./store";
import { useObserver } from "mobx-react";

const TodosHeader = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <h1>
      {`${store.todosCount} ${store.todosCount === 1 ? "todo" : "todos"}!`}
    </h1>
  ));
};

export default TodosHeader;
