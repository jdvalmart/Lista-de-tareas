import React from 'react'
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';



// const defaultTodos = [
//  {text:'visitar a O Rey Pele', completed:true},
//  {text:'visitar a Cristiano Ronaldo', completed:false},
//  {text:'visitar a Leonel Messi', completed:true},
//  {text:'visitar a Radamel Falcao', completed:false},
//  ]

//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

// localStorage.removeItem('TODOS_V1')


function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading, 
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')
 
  const completedTodos = todos.filter(todo => !!todo.completed).length

  const totalTodos = todos.filter(todo => todo.text).length

  const searchTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )

  
  const completeTodo = (text) => {
    const newTodos = [...todos] 
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text)                                                                                            
    newTodos[todoIndex].completed = true 
    saveTodos(newTodos)
  }
 
  const deleteTodo = (text) => {
    const newTodos = [...todos] 
    const todoIndex = newTodos.findIndex(                               
      (todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)                        
    saveTodos(newTodos)
  }
  
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos ={completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      searchTodos = {searchTodos}
      completeTodo = {completeTodo}
      setSearchValue = {setSearchValue}
      deleteTodo = {deleteTodo}
  
    
    />
  )
 
}




export default App;
