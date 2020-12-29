import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    this.formRef.current.reset();
  };
  return (
    <form ref={formRef} onSubmit={onSubmit} className="add-form">
      <input
        className="add-input"
        type="text"
        placeholder="Habit"
        ref={inputRef}
      />
      <button className="add-button" type="submit">
        등록
      </button>
    </form>
  );
});

export default HabitAddForm;
