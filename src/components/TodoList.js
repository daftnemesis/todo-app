import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <ul className='mt-4'>
      {
        todos.map((todo, i) =>
          // TodoListItem, todo, index, handleDelete, handleToggle
          <TodoListItem 
            key={todo.id}
            todo={todo} 
            index={i} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
          />
        )
      }
    </ul>
  )
}
