import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {TodosEmpty} from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';



function AppUI() {
    return (
        < >
          <TodoCounter />
          <TodoSearch />
          <TodoContext.Consumer>
            {({loading,
               error,
               searchTodos,
               completeTodo,
               deleteTodo
            })=>(
              <TodoList>
                {loading && < TodosLoading/>}
                {error && < TodosError/> }
                {(!loading && searchTodos.length === 0) && <TodosEmpty/> }
                
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
            )}
          </TodoContext.Consumer>
          <CreateTodoButton/>
        </>
      );
}

export {AppUI}