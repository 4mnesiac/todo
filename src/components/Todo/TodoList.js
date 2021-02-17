import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import { observer } from 'mobx-react-lite';
import store from "../../store/TodoStore";

const TodoList = observer(() => {
    return (
        <ul>
            {store.todos.map((todo, index) => {
                return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        title={todo.title}
                    />
                )
            })}
        </ul>
    )
});



export default TodoList;