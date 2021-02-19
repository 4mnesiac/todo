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
        console.log('remove', id)
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

TodoStore.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
}

export default new TodoStore();
