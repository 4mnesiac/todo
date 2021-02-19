import React from 'react';
import PropTypes from 'prop-types';
import store from '../../store/TodoStore'
import { observer } from 'mobx-react-lite';




const TodoItem = observer(({ todo }) => {
    const classes = ['task']
    if (todo.completed) {
        classes.push('task-done')
    }

    return (
        <li className={classes.join(' ')}>
            <span className="task-wrapper">
                <input
                    className="task-check"
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => store.toggleTodo(todo)}
                    placeholder="Add new goal"
                />
                {todo.title}
            </span>

            <button className='action-btn' onClick={() => store.removeTodo(todo.id)}>
                ❌
            </button>
        </li>
    )
})

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;