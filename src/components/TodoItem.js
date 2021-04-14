import React from "react";
import PropTypes from "prop-types";
import store from "../store/Store";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const TodoItem = observer(({ todo }) => {
  const classNames = ["todo"];
  if (todo.completed) {
    classNames.push("todo_completed");
  }
  const classes = useStyles();

  return (
    <li className={classNames.join(" ")}>
      <span className="todo__wrapper">
        <input
          className="todo__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => store.toggleTodo(todo)}
        />
        <p className="todo__text">{todo.title}</p>
      </span>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => store.removeTodo(todo.id)}
      >
        Delete
      </Button>
    </li>
  );
});

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
