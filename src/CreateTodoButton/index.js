import './CreateTodoButton.css'
import { AiOutlinePlusCircle } from "react-icons/ai";
function CreateTodoButton ({setOpenModal}){
    return (
        <button 
        className='CreateTodoButton'
        onClick={()=>{

            setOpenModal(state => !state)
        }
        }>
            <AiOutlinePlusCircle /></button>
    )
}

export {CreateTodoButton}