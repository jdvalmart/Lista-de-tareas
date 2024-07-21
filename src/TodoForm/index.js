import React from "react"
import './TodoForm.css'

function TodoForm(){
    return (
        <form>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
            placeholder="Visitar a un jugador"
            />
            <div className="TodoForm-Button-container">
                <button className="TodoForm-button-cancel">Cancelar</button>
                <button className="TodoForm-button-add">Crear</button>
            </div>
        </form>
    )
}

export {TodoForm}