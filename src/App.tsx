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
    const deleteTodoHandler = (todoId: string) => {
        setTodos((prevTodos) =>
            prevTodos?.filter((todo) => todo.id !== todoId)
        );
    };
    return (
        <div>
            <Todos items={todos} onRemoveTodo={deleteTodoHandler} />
            <NewTodo onAddTodo={addTodoHandler} />
        </div>
    );
}

export default App;
