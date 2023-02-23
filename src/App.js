import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Table } from "./Table";

function App() {
  const taskList = [];
  const badList = [];
  const invalidChars = ["+", "-", "e", "E"];
  const hrsPerWeek = 24 * 7;

  const [task, setTask] = useState([]);
  const handleOnFormSubmit = (newData) => {
    setTask([...task, newData]);
  };

  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>
      </div>
      <Form setTask={handleOnFormSubmit} />
      <Table task={task} />
    </div>
  );
}

export default App;
