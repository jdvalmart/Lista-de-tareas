import React from 'react'
import './TodosEmpty.css'

function TodosEmpty(){
    return ( 
        <>
            <div className='empty'>
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='parrafo'>
                <p>Crea tu primera tarea</p>
            </div>
        </>
        
    )
}

export {TodosEmpty}