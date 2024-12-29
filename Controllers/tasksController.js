const TaskModel = require('../Models/task');

exports.getAllTasks = (req, res) => {
    res.json(TaskModel.getAll());
};

exports.getTaskById = (req, res) => {
    const task = TaskModel.getById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
};

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const newTask = TaskModel.create({ title, description });
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const task = TaskModel.update(parseInt(req.params.id), req.body);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const deletedTask = TaskModel.delete(parseInt(req.params.id));
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    res.json(deletedTask);
};
