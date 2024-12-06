import { useState, useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import Input from "./Input";
import Button from "./Button";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "add", payload: text });
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="user-input"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your message
        </label>
        <Input
          id="user-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 hover:bg-blue-600"
      >
        Submit
      </Button>
    </form>
  );
}
