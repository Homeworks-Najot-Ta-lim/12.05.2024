import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
