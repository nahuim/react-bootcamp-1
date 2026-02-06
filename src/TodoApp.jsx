import TodoItem from "./TodoItem";

function TodoApp({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} text = {todo.text} />
      ))}
    </ul>
  );
}

export default TodoApp;