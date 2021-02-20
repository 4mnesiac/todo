import React from 'react';
import TodoItem from "./TodoItem";
import { observer } from 'mobx-react';
import store from "../store/TodoStore";

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