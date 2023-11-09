const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    taskName: {
      type: String,
      require: [true, "Please Add the Task Name..."],
    },
    taskPriorityLavel: {
      type: String,
      require: [true, "Please Add the Task Priority Lavel..."],
    },
    taskDesc: {
      type: String,
      require: [true, "Please Add the Task Description..."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
