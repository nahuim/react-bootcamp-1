const TodoItem = ( { todo, onDelete} ) => {
    return ( 
        <li>
            {todo.text}
            <button
            onClick={() => onDelete(todo.id)}>❌</button>
        </li>
     );
}
 
export default TodoItem;