import React from 'react'

function Todos({todos}) {
    const handleClick = (id)=>{
        fetch("http://localhost:8080/completed",{
            method:"PUT",
            body:JSON.stringify({
                _id:id
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
    }
  return (
    <div>
      {todos.map((todo,index)=>{
        return <div key={todo._id ? todo._id : index}>
            <h2>{todo.title}</h2>
            <p>{todo.discription}</p>
            <button onClick={()=>handleClick(todo._id)}>{todo.completed?"Completed":"Mark as Completed"}</button>
        </div>
      })}
    </div>
  )
}

export default Todos
