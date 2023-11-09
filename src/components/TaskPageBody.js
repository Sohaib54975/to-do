import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import AddTaskModal from "./AddTaskModal";

function TaskPage() {
  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <div className="col-7 mt-3 p-3 rounded task_page_body">
      <>
        <div className="task_hd d-flex">
          <div className=" fw-bold col-3">
            <p>Task Name</p>
          </div>
          <div className=" fw-bold col-4">
            <p>Description</p>
          </div>
          <div className=" fw-bold col-3">
            <p>Priority Lavel</p>
          </div>
          <div className=" fw-bold col-3">
            <p>Operation</p>
          </div>
        </div>
        <hr />
        <div className="task_hd d-flex">
          <div className="col-3">
            <p>Cricket match</p>
          </div>
          <div className="col-4">
            <p>held on thursday held on thursday held on thursday</p>
          </div>
          <div className="col-3">
            <p>High</p>
          </div>
          <div className="col-3 ">
            <MdOutlineModeEditOutline
              size={25}
              onClick={handleEdit}
              style={{ color: "#0d6efd", cursor: "pointer" }}
            />
            <MdDeleteOutline
              size={25}
              className="ms-4"
              onClick={handleDelete}
              style={{ color: "#0d6efd", cursor: "pointer" }}
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default TaskPage;
