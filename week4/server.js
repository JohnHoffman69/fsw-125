const express = require('express');
const app = express();

app.use(express.json());

app.use("/bounty", require('./bountyRouter.js'));

app.listen(2000, () => console.log("App is listening on Port 2000!"));