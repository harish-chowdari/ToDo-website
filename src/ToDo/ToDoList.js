import React from 'react'
import "../App.css"
const ToDoList = ({todo,deleteHandle}) =>{
  return (
    <div className='todo' >
        {todo.map((item,index)=> 
        
        <div className='item' key={index}> 
        
        <button className='delete' onClick={()=>deleteHandle(index)}>Delete</button>
        <br/>
        {item}
        
        </div>

        )}

    </div>
  )
}
export default ToDoList

