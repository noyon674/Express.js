const express = require('express');
const app = express();
//import file from another file

const port = 4000;

//Response Handling
app.get('/',(req, res)=>{
    res.send('I am your Home method');
});
app.get('/about', (req, res)=>{
    res.send('I am your About page');
});
app.get('/contact', (req, res)=>{
    res.send('I am your contact page');
})

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});
