const express = require('express');
const morgan = require('morgan');
const { v4: uuidv4 } = require('uuid');
const app = express();


// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database
const todos = [
    {
        name: "ultimate Mind Game",
        description: "Become a chess master",
        imageURL: "https://images.unsplash.com/photo-1538221566857-f20f826391c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: false,
        _id: uuidv4()
    }
];



// General endpoint handling
app.route("/")
.get((req, res) => {
    res.send(todos);
})
.post((req, res) => {
    console.log(req.body);
    const newTodoItem = req.body;
    newTodoItem._id = uuidv4();
    todos.push(newTodoItem);
    res.send(`Successfully added ${newTodoItem.name} to the database!`);
})

// Specific endpoint handling with parameter
app.route("/:todoID")
.get((req, res) => {
    const todoID = req.params.todoID;
    const foundTodoItem = todos.find(todo => todo._id === todoID);
    console.log(foundTodoItem)
    res.send(foundTodoItem);
})
.put((req, res) => {
    const todoID = req.params.todoID;
    const updatedTodoObject = req.body;
    const todoItemIndex = todos.findIndex(todo => todo._id === todoID);
    Object.assign(todos[todoItemIndex], updatedTodoObject);
    res.send('Successfully changed todo in the database!');
})
.delete((req, res) => {
    const todoID = req.params.todoID;
    const todoItemIndex = todos.findIndex(todo => todo._id === todoID);
    todos.splice(todoItemIndex, 1);
    res.send('Successfully removed todo from the database!');
})

// Listen to port 8500
app.listen(8500, () => {
    console.log("Server listening to port 8500");
});