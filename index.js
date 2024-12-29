const express = require('express');
const config = require('./Config/db');
const tasksRoutes = require('./Routes/tasks');
const errorHandler = require('./Middlewares/errorHandler');

const app = express();


app.use(express.json());

app.use('/tasks', tasksRoutes);

app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
});
