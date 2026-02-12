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

        setTodos([...todos,{id: Date.now(), text , completed: false}]);

        setText("");
    }

    function addToDO(){
      
    }
    function toggleToDo (id){
      setTodos(todos.map(
        todo=> todo.id === id ? {...todo, completed: !todo.completed}: todo
      ));
    }
function editTodo(id, newText) {
  setTodos(
    todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  );
}
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'>
     <form
  onSubmit={ handleSubmit }
>
        <input className='border p-2 rounded w-full mb-2'
        value = {text}
        onChange={(e) => setText(e.target.value)}
        placeholder='To do...'
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded w-full'> Add</button>

    </form>


    <TodoList todos = {todos} onDelete={handleDelete} onToggle = {toggleToDo} onEdit = {editTodo} />
    </div>
    </div>
  );
}

export default TodoApp;