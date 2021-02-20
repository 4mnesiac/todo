import React from 'react';
import PropTypes from 'prop-types';
import store from '../store/TodoStore'
import { observer } from 'mobx-react';


const TodoItem = observer(({ todo }) => {
    const classes = ['todo']
    if (todo.completed) {
        classes.push('todo_completed')
    }

    return (
        <li className={classes.join(' ')}>
            <span className="todo__wrapper">
                <input
                    className="todo__checkbox"
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => store.toggleTodo(todo)}
                />
                <p className="todo__text">{todo.title}</p>
            </span>
            <button className='todo__btn_remover' onClick={() => store.removeTodo(todo.id)}>
                ❌
            </button>
        </li>
    )
})

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;