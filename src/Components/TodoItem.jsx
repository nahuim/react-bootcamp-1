import { useState } from "react";
import Button from "./Button";
const TodoItem = ( { todo, onDelete, onToggle, onEdit } ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");
    return ( 
        
        <li className="flex justify-between items-center border-b py-2">
            <input className="border p-2 rounded w-full mb-2"
            type="checkbox"
            checked = {todo.completed}
            onChange={()=> onToggle(todo.id)}
             />
             {isEditing ? (<input className="border p-2 rounded w-full mb-2"
                value = {editText}
                onChange = {(e)=> setEditText(e.target.value)}
                onKeyDown={(e)=> {
                    if(e.key === "Enter"){
                        onEdit(todo.id, editText)
                        setIsEditing(false)
                    }
                }}/>
             ):<span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span> }
            
            {isEditing? (
                <div className="flex gap-2">
                <Button onClick={()=> {
                onEdit(todo.id, editText)
                setIsEditing(false)
            }
            } 
            className="ml-2 text-green-500">Save</Button>
            <Button onClick={() => setIsEditing(false)
            }
            
            className="text-green-500">Cancel</Button>
            <p>Editing...</p>
            </div>
            ): <Button onClick={()=> {
                setIsEditing(true)
            }}
            className={"ml-2"}
            >🖍</Button>}
            <Button
            onClick={() => onDelete(todo.id)}
            className="ml-2 text-green-500">❌</Button>
        </li>
     );
    
}

 
export default TodoItem;