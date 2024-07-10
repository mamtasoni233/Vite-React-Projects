import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
// import TodoItem1 from "./components/TodoItem1"
import "./App.css"
import TodoItems from "./components/TodoItems"

function App() {
  const todoItemsList = [
    {
      name: 'Buy milk',
      dueDate: '4/10/24'
    },
    {
      name: 'test',
      dueDate: '4/5/24'
    },
    {
      name: 'abc',
      dueDate: '4/10/24'
    },
  ]
  return (
    <>
      <center className="todo-container container">
        <AppName />
        <AddTodo />
        <TodoItems todoItemsList={todoItemsList} />



      </center >
    </>
  )
}

export default App
