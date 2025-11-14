import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const [todosList, setTodosList] = useState();
    const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

    const addTodoHandler = (todoText: string) => {};
    return (
        <div>
            <Todos items={todos} />
            <NewTodo onAddTodo={addTodoHandler} />
        </div>
    );
}

export default App;
