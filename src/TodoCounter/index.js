import './TodoCounter.css';


function TodoCounter({total, completed}){
  if (total > 1) {
    return(
      <h2>
        Has completado <span className='titulo'>{completed}</span> de tus <span className='titulo'>{total}</span>tareas
      </h2>
    )
  } else {
    return (
      <h2>No tienes tareas pendientes...</h2>
    )
  }
  
  }

  
  export {TodoCounter} 


  