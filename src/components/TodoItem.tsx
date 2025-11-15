const TodoItem: React.FC<{
    text: string;
    onRemoveTodo: () => void;
}> = (props) => {
    return (
        <li>
            {props.text}
            <button onClick={props.onRemoveTodo}>Remove</button>
        </li>
    );
};
export default TodoItem;
