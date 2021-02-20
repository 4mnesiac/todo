import { Observer, useLocalObservable } from "mobx-react";
import React from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
    const input = useLocalObservable(() => ({
        value: ''
    }))
    const submitHandler = (event) => {
        event.preventDefault();
        if (input.value.trim())
            props.addTodo(input.value);
        input.value = '';
    }
    const inputChange = event => {
        input.value = event.target.value;
    };

    return (
        <Observer>
            {() => (
                <form className='todos__form' onSubmit={submitHandler}>
                    <input
                        onChange={(e) => inputChange(e)}
                        placeholder="Add new goal"
                        value={input.value}
                        minLength="2"
                        maxLength="100"
                    />
                    <button>➕</button>
                </form>
            )}
        </Observer>
    )
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo;