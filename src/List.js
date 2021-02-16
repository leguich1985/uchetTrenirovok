import React from "react";

const List = ({ date, text, id, deleteHandler }) => {
  console.log(123, id);
  return (
    <tr>
      <td>
        <span>{date}</span>
      </td>
      <td>
        <span>{text}</span>
      </td>
      <td>
        <button>редактировать</button>

        <button
          onClick={() => {
            deleteHandler(id);
          }}
        >
          удалить
        </button>
      </td>
    </tr>
  );
};

export default List;
