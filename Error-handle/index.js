const express = require('express');
const app = express();
//import file from another file

const port = 4000;

//get a id from request and print it.
app.get('/',(req, res)=>{
    res.send('Welcome error handling code')
});


app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});

//////////////// Error handlling
//client error handle
app.use((req, res, next)=>{
    res.status(404).json({
        Message: 'Route not found'
    })
})

//server error handle
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({
        Message: 'Server is broken'
    })
})

