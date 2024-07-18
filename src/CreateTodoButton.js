import './CreateTodoButton.css'
import { AiOutlinePlusCircle } from "react-icons/ai";
function CreateTodoButton (){
    return (
        <button 
        className='CreateTodoButton'
        onClick={(event)=>{
            console.log('Me diste click')
            console.log(event);
            console.log(event.target)
        } }>
            <AiOutlinePlusCircle /></button>
    )
}

export {CreateTodoButton}