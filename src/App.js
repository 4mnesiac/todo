import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import store from './store/TodoStore';
import phoneBtn from './images/phone-btn.png';


function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Todos</h1>
      <div className="App__container">
        <AddTodo addTodo={v => store.addTodo(v)} />
        <TodoList todos={store.todos} />
        <img className="phone-btn" src={phoneBtn} alt="Btn 4 fun" title="It's here for fun :)" />
      </div>
    </div>
  );
}

export default App;
