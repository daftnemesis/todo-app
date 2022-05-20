import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './helper/todoReducer'
import { TodoList } from './components/TodoList'
import { useForm } from './hooks/useForm'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)
  const [{description}, handleInputChange, reset] = useForm({description: ''})

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(description.trim().lenght <= 1){
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    reset()
  }

  return (
    <div>
      <header className='w-full p-4'>
        <h1 className='font-bold lg:text-xl'>TodoApp by Jose Lozano</h1>
        <hr />
      </header>

      <section className='px-4'>
        <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
      </section>

      
      <form 
        className='bottom-0 fixed w-full grid justify-items-center px-8 pt-2 border-t bg-white pb-2'
        onSubmit={handleSubmit}
      >
        <input 
          className='p-2 font-medium bg-gray-100 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full outline-none mb-2'
          type='text'
          placeholder='Agregar'
          name='description'
          value={description}
          onChange={handleInputChange}
          autoComplete='off'
        />
        <button 
          className='text-white bg-blue-500 hover:bg-blue-600 rounded-xl py-1 my-1 w-28 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium text-sm'
          type='submit'
        >
          Agregar
        </button>
      </form>
    </div>
  )
}