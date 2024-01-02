let express = require('express');
let router = express.Router();

router.get('/person' , (req,res)=>{
    if(req.query.name){
        res.send(`You made request using the name ${req.query.name}`);
    }else{
        res.send('You made request from person rout');
    }
    
});

//Get request by bathing parameter
router.get('/person/:name' , (req,res)=>{
    res.send(`You have send request from param by ${req.params.name} user !`);
});

router.get('/error' , (req,res)=>{
    throw new Error('This Page Not Found !!');
});


module.exports = router;