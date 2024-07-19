import React from 'react'
import './TodoSearch.css'
import { TodoItem } from '../TodoItem'
import { FcTodoList } from 'react-icons/fc'

function TodoSearch({searchValue,setSearchValue, totalTodos}){

        return(
            <input 
             className="TodoSearch" 
             placeholder= 'busca en tu lista'
             value={searchValue}
             onChange={(event)=>{
                setSearchValue(event.target.value)
             }}
             />
        )
    
    }
   

export {TodoSearch}