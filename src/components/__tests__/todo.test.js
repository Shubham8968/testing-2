import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

test("Should render non-completed todo ", () => {
  const todo = { id: 1, title: "wash dishes", completed: false , };

  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");

});

test("Should render completed todo  ", () => {
  const todo = { id: 2, title: "Make dishes", completed: true,  };

  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Make dishes");
 expect(todoElement).toContainHTML("<strike data-testid=todo-2 >Make dishes</strike>")
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "wash dishes", completed: false, };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
 expect(tree).toMatchSnapshot();
});
