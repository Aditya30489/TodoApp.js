import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  //text should be typed in form
  const addTodo = todo => {
    if (!todo.text ) {return;}
    //console.log([todo,...todos])
    const newTodos = [todo, ...todos];
    console.log(...todos)
    setTodos(newTodos);
    
  };
  //to update todo
  //text should be updated , not the spaces( ex: "doing" should not be replaced by " ")
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text ) {return;}

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  //to remove todo
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };
  
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className='text-center mt-5'>TODO LIST</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;