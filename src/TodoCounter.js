import './TodoCounter.css';


function TodoCounter({total, completed}){
    return(
      <h2>
        Has completado <span className='titulo'>{completed}</span> de tus <span className='titulo'>{total}</span>tareas
      </h2>
    )
  }

  
  export {TodoCounter} 


  