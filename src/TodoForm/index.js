import React from "react"
import {TodoContext} from '../TodoContext'
import './TodoForm.css'

function TodoForm(){

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Escribe una tarea</label>
            <textarea
            placeholder="Ir al supermercado"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-Button-container">
                <button type="button" className="TodoForm-button-cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit"  className="TodoForm-button-add">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}