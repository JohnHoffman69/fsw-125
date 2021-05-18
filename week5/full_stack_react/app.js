const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware (For all requests),
app.use(express.json())
app.use(morgan('dev'));

// Routes
app.use('/bounties', require('./routes/bountyRouter.js'));

// Listen to port 3000
app.listen(3000, () => {
    console.log('Server is now listening to port 3000!');
});