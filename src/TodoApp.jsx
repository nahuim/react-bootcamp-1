import { Children, useState } from 'react'
import TodoItem from "./TodoItem";

function Card(){
    <div className='card'>
        {Children}
    </div>
}

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
  return (
    <div>
   <form
  onSubmit={(e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text }
    ]);

    setText("");
  }}
>
        <input 
        value = {text}
        onChange={(e) => setText(e.target.value)}
        placeholder='To do...'
        />
        <button> Add</button>

    </form>


    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}
        <button 
        onClick={()=> {
            setTodos(todos.filter((t)=> t.id !==todo.id))
        }}
        >❌</button>
        </li>
      ))}
    </ul>
 
    </div>
  );
}

export default TodoApp;