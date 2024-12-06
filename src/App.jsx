import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <TodoForm />
        </div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}
