import React from "react"
import "./App.css"
import ToDoList from "./ToDo/ToDoList"
import dark from "./icons/dark.png"
import light from "./icons/light.png"


export default function ToDo() {

  const [task,setTask] = React.useState("")
  const [toDo,setToDo] = React.useState([])
  const [on,setOn] = React.useState(false)

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

function handleMode(){
  setOn(!on)
}

  const style ={
    backgroundColor : on ?  "black": "white",
    color: on ? "white":"black"
  }

  

  return (
    <div className="container" style={style}>

   <img className="theme" src={on ? light : dark} onClick={handleMode} 
        alt="dark" height={on?30:32} width={31}/>
    <h3 className="title">Todo Management App</h3>
    
    <form className="input" onSubmit={submitHandler}>

    <input type="text" value={task} style={style}
    onChange={handleChange}/>
    <button className="add" disabled={task.length === 0}>Add</button>

    

    </form>
    <div >
    <ToDoList todo={toDo} deleteHandle={deleteHandle} />
    </div>
           
    
    
    </div>
  )
}
