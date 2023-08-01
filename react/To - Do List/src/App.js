
import './App.css';
import {useState} from "react";

function App() {
  const [todoList,setTodoList]=useState([]);
  const [newTsk,setnewTast]=useState("");

  const handleChange = (event) => {
    setnewTast(event.target.value);
  }

  const addtsk =()=>{
    setTodoList([...todoList,newTsk])
  }
  const deltsk=(taskname)=>{

    setTodoList(
      todoList.filter((task)=> task!==taskname ))

  }
  return (
  
    <div className="App">
     <div className="addtask">
      <input onChange={handleChange}/>
      <button onClick={addtsk}>Add Task</button>
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return <div>
          
        <h1>{task}</h1>
        <button onClick={()=>deltsk(task)}>X</button>
        </div>
      })}
     </div>
    </div>
  );
}

export default App;
