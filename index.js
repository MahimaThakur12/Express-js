const express =  require('express');
const app = express()
const port = 3000;
const path = require ('path');
app.use(express.urlencoded({
    extended: true
}));
app.get ('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/view/2nd.html'));

});
app.post('/handlelogin',(req,res)=>{
    console.log(req.body.username);
    res.end();
});
app.listen(port,() =>console.log("server Started"))