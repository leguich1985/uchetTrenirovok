import React from "react";

const Form = ({ formHandler, addHandler }) => {
  return (
    <>
      <input type="date" name="date" onChange={formHandler} />
      <input type="text" name="text" onChange={formHandler} />
      <button onClick={addHandler}>OK</button>
    </>
  );
};

export default Form;
