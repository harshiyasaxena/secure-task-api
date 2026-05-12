const express = require('express');

const router = express.Router();

const {
    createTask,
    getTasks,
    deleteTask
} = require('../controllers/taskController');

const protect = require('../middleware/authMiddleware');


// CREATE TASK
router.post('/', protect, createTask);


// GET TASKS
router.get('/', protect, getTasks);


// DELETE TASK
router.delete('/:id', protect, deleteTask);


module.exports = router;