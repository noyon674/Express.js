const express = require('express');
const app = express();
//import file from another file

const port = 4000;

//get a id from request and print it.
app.get('/',(req, res)=>{
    const id = req.query.id;
    res.send(`<h1>Id is : ${id}</h1>`);
});


app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});
