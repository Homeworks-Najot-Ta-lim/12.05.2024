import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import Button from "./Button";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="flex items-center justify-between p-3 rounded-md">
      <span
        className={`${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>

      <Button
        onClick={() => dispatch({ type: "update", id: todo.id })}
        className={`${
          todo.completed
            ? "bg-green-500 text-white"
            : "bg-gray-300 text-gray-700"
        }`}
      >
        {todo.completed ? "Done" : "Complete"}
      </Button>

      <Button
        onClick={() => dispatch({ type: "delete", id: todo.id })}
        className="bg-red-300"
      >
        Delete
      </Button>
    </li>
  );
}
