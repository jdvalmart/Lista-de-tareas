import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchTodos,
    completeTodo,
    setSearchValue,
    deleteTodo
}) {
    return (
        < >
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
             {loading && <p>Estamos cargando...</p>}
             {error && <p>Desesperate hubo un error</p> }
             {(!loading && searchTodos.length === 0) && <p>Crea tu primer todo</p> }
              
             {searchTodos.map(todo => (
              <TodoItem 
              text={todo.text} 
              key={todo.text}
              completed={todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
              />
             ))}
          </TodoList>
          <CreateTodoButton/>
        </>
      );
}

export {AppUI}