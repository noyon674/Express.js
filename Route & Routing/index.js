const express = require('express');
const app = express();
//import file from another file
const userRouter = require('./Router');

const port = 4000;

//Run all the routes to the server
app.use(userRouter);

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});

