const express = require('express');
const router = express.Router();
const {getAllTask , addTask , updateTask , deleteTask} = require("../controllers/taskController")

router.get("/", getAllTask);
router.post("/" , addTask);
router.put("/:id" , updateTask);
router.delete("/:id" , deleteTask);


module.exports = router