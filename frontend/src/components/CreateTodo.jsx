import React, { useState } from 'react'

function CreateTodo() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = () => {
    fetch("http://localhost:8080/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(async (res) => {
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        alert("Todo added");
      } else {
        alert("Failed to add todo");
      }
    })
    .catch((error) => {
      alert("An error occurred: " + error.message);
    });
  };

  return (
    <div>
      <input style={{padding:"10px",margin:"10px"}} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title"></input>
      <input style={{padding:"10px",margin:"10px"}} onChange={(e)=>{setDescription(e.target.value)}} type="text" placeholder="Description"></input>

      <button onClick={handleClick} style={{padding:"10px",margin:"10px"}} >Add a todo</button>
    </div>
  )
}

export default CreateTodo
