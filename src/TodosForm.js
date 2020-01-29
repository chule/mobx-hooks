import React from "react";
import StoreContext from "./store";

const TodosForm = () => {
  const store = React.useContext(StoreContext);
  const [text, setText] = React.useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        store.addTodo(text);
        setText("");
      }}
    >
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  );
};

export default TodosForm;
