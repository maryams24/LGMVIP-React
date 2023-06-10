import React,{useState} from 'react';
import Todo from './Todo';
import Todoform from './Todoform'
export default function Todolist() {


const [todos, setTodos]= useState([]);

const addTask=task =>{
    if(!task.text){
return
    }
const newTodos= [task, ...todos];

setTodos(newTodos);

}
const removeTask= id =>{

let updatedtasks= [...todos].filter(task=> task.id !== id)
setTodos(updatedtasks)

}

const completedTask=id =>{
 let updatedtasks=todos.map(todo=>{
  if(todo.id === id){
    todo.isComplete=true;
  }
  return todo;
 })
setTodos(updatedtasks)

}


  return <div>
    <Todoform addTask={addTask}></Todoform>
    <Todo todos={todos} completedTask={completedTask} removeTask={removeTask}>

    </Todo>
  </div>;
  
}
