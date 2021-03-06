import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => {
                   return <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} />
                })}
            </ul>
        </div>
    )
}

export default TodoList;