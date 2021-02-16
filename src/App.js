import { useState } from "react";
import "./App.css";
import { data } from "./data";
import { Form, View } from "./exports";

const App = () => {
  const [state, setState] = useState(data);
  const [formData, setFormData] = useState({});

  const deleteHandler = (id) =>
    setState((state) => state.filter((el) => el.id !== id));

  const formHandler = (e) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  const sorted = (state) =>
    [].concat(state.sort((a, b) => (a.date > b.date ? -1 : 1)));

  const addHandler = () => {
    setState((state) =>
      state.concat({
        date: formData.date,
        text: formData.text,
        id: state.length + 1,
      })
    );
  };

  return (
    <>
      <Form formHandler={formHandler} addHandler={addHandler} />
      <View state={sorted(state)} deleteHandler={deleteHandler} />
    </>
  );
};

export default App;
