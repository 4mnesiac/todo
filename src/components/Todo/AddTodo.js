import { Observer, useLocalObservable } from "mobx-react";
import React from "react";
// import { useState } from 'react';
import PropTypes from "prop-types";

const AddTodo = (props) => {
    // const [input, setInput] = useState('');

    // const addTask = () => {
    //     if (input.trim()) {
    //         props.addTodo(input)
    //         setInput('');
    //     } 
    // }
    const input = useLocalObservable(() => ({
        value: ''
    }))

    const submitHandler = (event) => {
        event.preventDefault();
        // addTask()
        if (input.value.trim())
            props.addTodo(input.value)
    }

    const inputChange = event => {
        // setInput(event.target.value);
        input.value = event.target.value;
    };

    return (
        <Observer>
            {() => (
                <form className='task-input' onSubmit={submitHandler}>
                    <input
                        onChange={(e) => inputChange(e)}

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