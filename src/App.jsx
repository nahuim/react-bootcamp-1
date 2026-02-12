import { useState } from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import TodoApp from './Components/TodoApp'

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
