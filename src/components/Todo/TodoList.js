import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import { observer } from 'mobx-react-lite';
import store from "../../store/TodoStore";

const TodoList = observer(() => {
    const { sortedTasks } = store;
    return (
        <ul className='todos'>
            {sortedTasks.map((task) => {
                return (
                    <TodoItem
                        todo={task}
                        key={task.id}
                    />
                )
            })}
        </ul>
    )
});



export default TodoList;