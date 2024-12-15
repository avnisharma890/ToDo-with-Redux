import React from 'react'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
    <div className='p-5 bg-zinc-600 h-screen'>
      <AddTodo />
      <Todos />
    </div>
    </>
  )
}

export default App