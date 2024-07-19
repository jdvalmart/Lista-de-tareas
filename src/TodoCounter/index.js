import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter(){

const {
    completedTodos,
    totalTodos,
} = React.useContext(TodoContext)

  if (totalTodos > 1) {
    return(
      <h2>
        Has completado <span className='titulo'>{completedTodos}</span> de tus <span className='titulo'>{totalTodos}</span>tareas
      </h2>
    )
  } else {
    return (
      <h2>No tienes tareas pendientes...</h2>
    )
  }
  
  }

  
  export {TodoCounter} 


  