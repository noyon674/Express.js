const express = require('express');
const app = express();
//
const port = 4000;

//HTTP Methods [get, post, put, delete]

app.get('/', (req, res)=>{
    res.send('Hi, I am GET method to get somthing from the server');
});
app.post('/', (req, res)=>{
    res.send('Hi, I am POST method to post something to the server');
});
app.put('/', (req, res)=>{
    res.send('Hi, I am PUT method to update something to the server');
});
app.delete('/', (req, res)=>{
    res.send('Hi, I am DELETE method to delete something from the server');
});

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});

