import React from "react";
import { List } from "./exports";

const View = ({ state, deleteHandler }) => {
  return (
    <table>
      <tbody>
        {state.map((el) => (
          <List key={el.id} {...el} deleteHandler={deleteHandler} />
        ))}
      </tbody>
    </table>
  );
};

export default View;
