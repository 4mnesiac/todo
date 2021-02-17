import React from 'react';
import PropTypes, { func } from 'prop-types';
import store from '../../store/TodoStore'
import { observer } from 'mobx-react-lite';


const TodoItem = observer((todo) => {
    return (
        <li>
            <span>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => store.updateTodo(todo)}
                />
                <strong>{todo.index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='remove' onClick={() => store.removeTodo(todo.id)}>
                &times;
            </button>
        </li>
    )
})

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem;