import { createContext, useReducer } from "react";

const TodoContext = createContext();

const initValue = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: true },
    { id: 3, text: "Deploy application", completed: false },
];

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];

        case "update":
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        case "delete":
            return state.filter((todo) => todo.id !== action.id);

        default:
            return state;
    }
}

export function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(reducer, initValue);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;
