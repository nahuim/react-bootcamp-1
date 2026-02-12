import TodoItem from "./TodoItem";

const TodoList = ({todos , onDelete, onToggle, onEdit }) => {
    return (  
        <div>
        { todos.length === 0 ? (<p>No To-Dos yet...</p>) :(
        <ul>
            {todos.map(todo=> (
                <TodoItem 
                key={todo.id}
                todo = {todo}
                onDelete={onDelete}
               onToggle={onToggle}
                onEdit={onEdit}

                />

                

            ))}
        </ul>
    )}
    </div>
    );
}
 
export default TodoList;
