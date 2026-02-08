import { Children, useState } from 'react'
import TodoItem from "./TodoItem";
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    function handleDelete (id){
      setTodos(todos.filter((todo)=> todo.id !== id))
    }
    function handleSubmit (e){
        e.preventDefault();

        if(!text.trim()) return; 

        setTodos([...todos,{id: Date.now(), text }]);

        setText("");
    }
  return (
    <div>
   <form
  onSubmit={ handleSubmit }
>
        <input 
        value = {text}
        onChange={(e) => setText(e.target.value)}
        placeholder='To do...'
        />
        <button> Add</button>

    </form>


    <TodoList todos = {todos} onDelete={handleDelete}/>
    </div>
  );
}

export default TodoApp;