import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function AddTaskModal() {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
        // style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="d-flex justify-content-between">
              <div class="mb-3 col-6">
                <label>Add Task</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3 col-5">
                <label>Priority Lavel</label>
                <select class="form-select" >
                  <option selected></option>
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </select>
              </div>
            </div>
            <div class="mb-3">
              <label>Description</label>
              <input type="text" class="form-control" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTaskModal;
