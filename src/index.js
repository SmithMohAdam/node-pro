let express = require('express');
let app = express();
let path = require('path');
let personRouter = require('./routes/person');
let customerRouter = require('./routes/customer')
let bodyParser = require('body-parser')


app.use(bodyParser.json());

app.use((req,res, next) =>{
    console.log(`${new Date().toDateString()} ====== ${req.originalUrl} ===== ${req.body}`);
    next();
});
app.use(personRouter);
app.use(customerRouter);
//app.use(express.static('public'));

app.use((req,res,next)=>{
    res.status(404).send("You missed !!");
});

app.use((err ,req,res,next)=>{
    console.error(err.stack);
    res.sendFile(path.join(__dirname),'../public/500.html');
});

let PORT = process.env.PORT || 3000 ;

app.listen(PORT , () => console.log(`Start server on ${PORT}`));

//console.log('Hello world');