import React from "react"
import "./App.css"
import ToDoList from "./ToDo/ToDoList"

export default function ToDo() {

  const [task,setTask] = React.useState("")
  const [toDo,setToDo] = React.useState([])

  function handleChange(e)
  {
    setTask(e.target.value)
    
  }

  function submitHandler(e){
    e.preventDefault();
    const newTodos = [...toDo,task];
    setToDo(newTodos);
    setTask("");
  }

  function deleteHandle(indexVal){
    const newTodo = toDo.filter((todo,index) => index !== indexVal);
    setToDo(newTodo);
  }
 

  return (
    <div className="container">

    <h3 className="title">Todo Management App</h3>
    
    <form className="input" onSubmit={submitHandler}>

    <input type="text" value={task} 
    onChange={handleChange}/>
    <button className="add" disabled={task.length === 0}>Add</button>

    

    </form>
    <div >
    <ToDoList todo={toDo} deleteHandle={deleteHandle} />
    </div>
           
    
    
    </div>
  )
}
