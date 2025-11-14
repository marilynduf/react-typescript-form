import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubitForm = (event: React.FormEvent) => {
        event.preventDefault();
        const textEntered = inputRef.current!.value;
        if (textEntered.trim().length === 0) {
            // trow error
            return;
        }
        props.onAddTodo(textEntered);
    };
    return (
        <form onSubmit={handleSubitForm}>
            <input ref={inputRef} id="todoText" type="text" />
            <label htmlFor="todoText"></label>
            <button>Add</button>
        </form>
    );
};
export default NewTodo;
