import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos]: any[] = useState([])
  const [inputValue, setInputValue]: any[] = useState("")

  function handleChange(e:any) {
    setInputValue(e.target.value)
  };

  function handleSubmit(e:any) {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  };  

  function handleDelete(index:any) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="todo-project">Todo Project</h1>
      <h1 className="ravein">Creator: Ravein</h1>
      <div className="functional">
        <h1 className="tasks">My Tasks:</h1>

        <button onClick={handleSubmit}>Add</button>
        <input value={inputValue} onChange={handleChange} type="text"></input>

        <ul>
          {todos.map((todo: any, index: any) => (
            <li key={index}>{todo}
            <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
} 


export default App
