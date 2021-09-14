import React from "react";

function todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1 data-testid={`todo-${id}`}>{title}</h1>;
  const text = completed ? (
    <strike data-testid={`todo-${id}`}>{title}</strike>
  ) : (
    h1
  );
  return text;
}
export default todo;
