import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import store from "./store/Store";
import { Container } from '@material-ui/core';


function App() {
  return (
    <Container maxWidth="xl">
    <div className="App">
      <h1 className="App__heading">Todos</h1>
      <div className="App__container">
        <AddTodo addTask={(v) => store.addTodo(v)} />
        <TodoList todos={store.todos} />
      </div>
    </div>
    </Container>
  );
}

export default App;

