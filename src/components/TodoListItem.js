import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <>
      <li
        className='flex justify-between mb-2 border-b-2 pb-2'
      >
        <p
          className={`font-medium w-100 cursor-pointer ${todo.done && 'line-through'}`}
        >
          {index + 1}. {todo.desc}
        </p>

        <div className=''>
          <button
            className='mr-2 bg-green-500 rounded-md px-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium text-sm'
            onClick={() => handleToggle(todo.id)}
          >
            Listo
          </button>

          <button
            className='bg-red-500 rounded-md px-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium text-sm'
            onClick={() => handleDelete(todo.id)}
          >
            Borrar
          </button>
        </div>
      </li>
    </>
  )
}
