import React from "react";

export const Table = ({ task }) => {
  return (
    <div>
      <div class="row mt-5 g-2">
        <div class="col-md">
          <h2 class="text-center">Entry List</h2>
          <hr />
          <table class="table table-striped table-hover">
            <thead>
              <tbody id="task-list">
                <tr>
                  <td></td>
                  <td>
                    <ul>
                      {task.map((item, i) => {
                        <li>{item.task}</li>;
                        <li>{item.hr}</li>;
                      })}
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </thead>
          </table>
        </div>
        <div class="col-md">
          <h2 class="text-center">Bad List</h2>
          <hr />
          <table class="table table-striped table-hover">
            <tbody id="bad-task"></tbody>
          </table>

          <div class="text-end fw-bold">
            You can save <span id="totalBadHrs">0</span>Hours
          </div>
        </div>
      </div>

      <div class="row fw-bold">
        <div class="col">
          The total hours allocated for this week is
          <span id="totalHrs">0</span>Hours
        </div>
      </div>
    </div>
  );
};
