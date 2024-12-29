let tasks = [];
let currentId = 1;

const TaskModel = {
    getAll: () => tasks,
    getById: (id) => tasks.find((t) => t.id === id),
    create: (task) => {
        const newTask = { id: currentId++, ...task, completed: false };
        tasks.push(newTask);
        return newTask;
    },
    update: (id, updates) => {
        const task = tasks.find((t) => t.id === id);
        if (task) Object.assign(task, updates);
        return task;
    },
    delete: (id) => {
        const index = tasks.findIndex((t) => t.id === id);
        if (index !== -1) return tasks.splice(index, 1)[0];
    },
};

module.exports = TaskModel;
