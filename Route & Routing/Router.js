//import router method from the express
const Router = require('express').Router();

Router.get('/',(req, res)=>{
    res.send('I am your GET method');
});

Router.post('/',(req, res)=>{
    res.send('I am your POST method');
});

Router.put('/',(req, res)=>{
    res.send('I am your PUT method');
});

Router.delete('/',(req, res)=>{
    res.send('I am your DELETE method');
});

//export the all the routers
module.exports = Router;