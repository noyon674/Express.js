const express = require('express');
const app = express();
//import file from another file

const port = 4000;

//passing status code and json response
app.get('/',(req, res)=>{
    res.status(200).json({
        Success: true,
        Message: 'I am your home route.'
    });
});


app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});
