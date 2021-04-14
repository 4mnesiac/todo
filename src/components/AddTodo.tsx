import { Observer, useLocalObservable } from "mobx-react";
import React from "react";


export interface StandardComponentProps {
  addTask(value: string): string
  children: React.ReactNode
}

const AddTodo = (props: StandardComponentProps) => {
  const input = useLocalObservable(() => ({
    value: "",
  }));

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (input.value.trim()) props.addTask(input.value);
    input.value = "";
  };

  const inputChange = (event: any) => {
    input.value = event.target.value;
  };

  return (
    <Observer>
      {() => (
        <form className="todos__form" onSubmit={submitHandler}>
          <input
            onChange={(e) => inputChange(e)}
            placeholder="Add new goal"
            value={input.value}
          />
        </form>
      )}
    </Observer>
  );
};

export default AddTodo;
