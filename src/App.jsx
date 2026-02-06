import { useState } from 'react';
import Footer from './Footer'
import Header from './Header'
import TodoApp from './TodoApp'

const todos = [
  {id: 1, text: "learn react"},
  {id: 2, text: "Build Projects"},
]

function App() {

  return (
    <div>
    <Header title = "My to do app"/>
    <TodoApp  todos />
    </div>
  )
}

export default App
