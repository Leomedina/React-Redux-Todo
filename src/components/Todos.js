import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Todo({ handleTodo }) {
  const todos = useSelector(store => store.todos);

  return (
    <ul>
      {todos.map(({ todo, id }) => {
        return (
          <>
            <li><h3>{todo}</h3></li>
            <button className='todoBtn' onClick={() => handleTodo('REMOVE', { id, todo })}>X</button>
          </>
        )
      })}
    </ul>
  )
};

export default Todo;