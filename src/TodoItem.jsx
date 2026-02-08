import { useState } from "react";

const TodoItem = ( { todo, onDelete, onToggle, onEdit } ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");
    return ( 
        
        <li>
            <input 
            type="checkbox"
            checked = {todo.completed}
            onChange={()=> onToggle(todo.id)}
             />
             {isEditing ? (<input
                value = {editText}
                onChange = {(e)=> setEditText(e.target.value)}/>
             ):<span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span> }
            
            {isEditing? (<button onClick={()=> {
                onEdit(todo.id, editText)
                setIsEditing(false)
            }
            } >Save</button>): <button onClick={()=> {
                setIsEditing(true)
            }}>🖍</button>}
            { console.log(todo)};
            <button
            onClick={() => onDelete(todo.id)}>❌</button>
        </li>
     );
    
}

 
export default TodoItem;