import './scss/App.scss';
import React, { Fragment } from 'react';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';
import store from './store/TodoStore';

/*
TODO:
  - закончить со стилями (отцентровать поле ввода, прибрать файлы, DRY)
  - прокинуть плейсхолдер
  - адаптив
  - отрефакторить
*/
function App() {
  return (
    <div className="App">
      <h1 className="top">Todos</h1>
      <div className="container">
        <AddTodo addTodo={v => store.addTodo(v)} />
        <TodoList todos={store.todos} />
      </div>
    </div>
  );
}

export default App;
