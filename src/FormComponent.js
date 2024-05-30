import { useState } from "react";


const FormComponent = ()=>{

  // define state

  const [todoinput, setTodoInput] = useState([]);
  console.log("todoinput",todoinput);

  const addTodo = (event)=>{
      if(todoinput !==""){
        setTodoInput(event.target.value)
        setTodoInput("");
      }else{
        console.log("input box empty");
        
      }
      
  }




  return(
    <div>
      <h4>Todo App</h4>
      <h5>Enter Name : {todoinput}</h5>
      <input 
      type="text"
      placeholder="Enter value"
      onChange={(event)=> setTodoInput(event.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}
export default FormComponent;