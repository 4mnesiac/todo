import { makeAutoObservable } from 'mobx';
import PropTypes from 'prop-types';

class Store {
    todos = [
        { id: 1, completed: false, title: 'Think about' },
        { id: 2, completed: false, title: 'Listen story' },
        { id: 3, completed: false, title: 'Raid the Dragon' },
        { id: 4, completed: false, title: 'Got the Life' },
        { id: 5, completed: false, title: 'To be for sure' },
        { id: 6, completed: true, title: 'Create React App' },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setTodo(payload) {
        this.todos = payload;
    }

    addTodo(task) {
        let tasks = this.todos;
        tasks.push({
            id: Date.now(),
            title: task,
            completed: false
        });
        this.setTodo(tasks);
    }

    removeTodo(id) {
        let tasks = this.todos;
        tasks = tasks.filter(todo => todo.id !== id)
        this.setTodo(tasks);
    }

    toggleTodo(someTodo) {
        someTodo.completed = !someTodo.completed;
    }

    get sortedTasks() {
        let tasks = this.todos;
        return tasks
            .slice()
            .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    }
}

Store.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
}

export default new Store();
