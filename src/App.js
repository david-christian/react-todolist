import TodoItem from './TodoItem'
import React, { useState, useRef } from 'react'

const filterStandard = {
  all: () => true, 
  done: (todo) => todo.isDone, 
  undone: (todo) => !todo.isDone, 
}

export default function App() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")
  const [filter, setFilter] = useState("all")
  const id = useRef(1)

  // 新增 todo
  const handleButtonClick = () => {
    setTodos([{
      id:id.current, 
      content: value, 
      isDone: false
    }, ...todos])
    setValue('')
    id.current++
  }

  // 清空 todo
  const handleClearTodo = () => {
    setTodos([])
  }

  // 綁定輸入框
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  // 已完成與未完成
  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo
      return {
        ...todo, 
        isDone: !todo.isDone
      }
    }))
  }

  // 刪除 todo
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleFilterTodo = status => {
    setFilter(status)
  }
 
  return (
    <div className="App">
      <input type="text" placeholder="todo" value={value} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add todo</button>
      <button onClick={handleClearTodo}>清空</button>
      <button onClick={() => handleFilterTodo("all")}>ALL</button>
      <button onClick={() => handleFilterTodo("done")}>已完成</button>
      <button onClick={() => handleFilterTodo("undone")}>未完成</button>
      {
        todos.filter(filterStandard[filter]).map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone} />)
      } 
    </div>
  );
}