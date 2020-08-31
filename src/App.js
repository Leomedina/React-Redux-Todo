import React from 'react';
import './styles/App.css';
import { useDispatch } from 'react-redux';
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'

function App() {
  const dispatch = useDispatch();

  const handleTodo = (type, todo) => {
    dispatch({ type: type, payload: todo });
  };

  return (
    <div className="App">
      <TodoForm handleTodo={handleTodo} />
      <Todos handleTodo={handleTodo} />
    </div>
  );
}

export default App;
