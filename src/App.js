import './App.css';
import React, { useEffect } from 'react';
import TodoList from './components/Todo/TodoList';


function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
