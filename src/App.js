import React from 'react'
function TodoList() {
  const [todos, setTodos] = React.useState([])
  const [newtodo, setNewTodo] = React.useState("")
  const [msg, setMsg] = React.useState("")

  const addTodo = () => {
    if (newtodo !== '') {
      const updatedtodos = [...todos, newtodo]
      localStorage.setItem('todos', updatedtodos)
      setTodos([...todos, newtodo])
      setNewTodo("")
      setMsg("")
    }
    else {
      setMsg('Please Enter TodoTask')
    }
  }





  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todos', updatedTodos)
    setTodos(updatedTodos);
  }

  const deleteall = () => {
    setTodos([])
    localStorage.removeItem('todos')
  }





  return (<>
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input className="todo-input" value={newtodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Add Todo' />
        <button className="add-button" onClick={addTodo} style={{ marginTop: '10px' }}><i className="fa fa-plus-circle"></i></button>
      </div>
      <p className='pa'>{msg}</p>
      <div className="filters">
        <div className="filter" data-filter="completed" style={{width:'220px',alignItems:'center'}}>
          Todo
          </div>
        <div className="delete-all" onClick={deleteall}>Delete All</div>
      </div>
      {todos.map((todo, index) => {
        return (
          <ul key={index}>
            <li className='rt-li' style={{ color: 'skyblue', marginTop: '10px' }}>
              <input type="checkbox" checked={todo.completed} style={{marginLeft:'20px', borderRadius:'20px'}}/>
            {todo}
              <button className='filter' onClick={() => deleteTodo(index)} style={{ marginLeft: '10px', backgroundColor: 'skyblue' }}>Delete</button></li>
          </ul>
        )
      })}
    </div>
  </>);
}
export default TodoList