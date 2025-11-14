import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const todo = new Todo(todoText);
        setTodos((prevTodos) => prevTodos?.concat(todo));
    };
    return (
        <div>
            <Todos items={todos} />
            <NewTodo onAddTodo={addTodoHandler} />
        </div>
    );
}

export default App;
