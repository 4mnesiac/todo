import { makeAutoObservable } from 'mobx';
import PropTypes from 'prop-types';


class TodoStore {
    todos = [
        { id: 1, completed: false, title: 'first' },
        { id: 2, completed: false, title: 'second' },
        { id: 3, completed: false, title: 'third' },
        { id: 4, completed: false, title: 'fourth' },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(task) {
        this.todos.push(task);

    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('remove')

    }
    updateTodo(someTodo) {
        console.log(someTodo)
        someTodo = { ...someTodo, completed: !someTodo.completed }
    }

}

TodoStore.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default new TodoStore();
