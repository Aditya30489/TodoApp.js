import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className='text-center'>
    <div className='bg-success' id='q'>
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className='todo text-white d-inline'>
        {todo.text}
      </div>
        <div className='icons d-inline' id='w'>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon text-warning m-2' id='icon1' />
        </div>
        <div className='icons d-inline' id='e'>
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon text-info m-1' id='icon2'/>
        </div>
      </div>
      </div>
      </div>
  ));
};

export default Todo;