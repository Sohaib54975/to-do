const Task = require("../model/taskModel");

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({ userId: req.user.id });
    res.status(200).json({ message: "Allt The Task is Here", task: task });
  } catch (error) {
    console.log("Error in getting all task:: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addTask = async (req, res) => {
  const { taskName, taskDesc, taskPriorityLavel } = req.body;
  try {
    // if (!taskName || !taskDesc || !taskPriorityLavel) {
    //   res.status(400).json({ message: "Enter All the Field" });
    // }

    const task = await Task.create({
      taskName,
      taskDesc,
      taskPriorityLavel,
    //   taskId: req.user.id,
    });
    // res.status(200).json({ message: "Added Task is Here", task: task });
  } catch (error) {
    console.log("Error in addign the task :: ", error);
    // res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  try {
    if (!task) {
      res.status(400).json({ message: "Task isn't Found" });
    }
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Task is Updated Successfully",
      updateTask: updateTask,
    });
  } catch (error) {
    console.log("Error in updating the task :: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  try {
    if (!task) {
      res.status(400).json({ message: "Task isn't Found" });
    }
    await Task.remove(task);
    res
      .status(200)
      .json({ message: `Task is Deleted Successfully for  ${req.params.id}` });
  } catch (error) {
    console.log("Error in deleting the task :: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllTask, addTask, updateTask, deleteTask };
