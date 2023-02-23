import { useState } from "react";

export const Form = ({ handleOnFormSubmit }) => {
  const [data, setData] = useState("");
  const getData = (e) => {
    const { value } = e.target;
    setData(value);
  };

  const handleOnSubmit = (e) => {
    const [task, hr] = e.target;
    console.log(task.value, hr.value);
    setTask(task.value, hr.value);
    e.preventDefault();
    handleOnFormSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div class="row mt-3">
          <div class="col-md-6">
            <input
              type="text"
              name="task"
              class="form-control task-input"
              required
              placeholder="Enter a task"
              onChange={getData}
            />
          </div>

          <div class="col-md-3">
            <input
              type="number"
              name="hr"
              class="form-control hrs-input"
              min="1"
              required
              placeholder="Enter no. of hrs"
              //   onChange={getData}
            />
          </div>

          <div class="col-md-3 text-center">
            <button class="btn btn-primary" type="submit" id="form-btn">
              <i class="fa-solid fa-plus"></i>Add New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
