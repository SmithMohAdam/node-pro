let CustomerModel = require('../models/customer.model');
let express = require('express');

let router = express.Router();




router.post('/customer', (req,res)=>{
    if(!req.body){
        return res.status(400).send("Bad Request !!");
    }

    let model = new CustomerModel(req.body);
    model.save()
        .then((result)=>{
            if(!result || result.lenght ===0){
                return res.status(500).send(result);
            }

            res.status(201).send(result);
        })
        .catch((err)=>{
            res.status(500).json(err);
        });
});
router.get('/customers/' , (req ,res)=>{
    CustomerModel.find()
        .then((result)=>{
            res.json(result);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })

});

router.get('/customer',(req,res)=>{
    if(!req.query.email){
        return res.status(404).send("Missing URL Parameter : Email");
    }

    CustomerModel.findOne({email: req.query.email})
        .then((result)=>{
            //console.log(result)
            res.json(result);
        })
        .catch((err)=>{
            res.status(500).json(err);
        });
});

router.put('/customer' , (req,res)=>{
    if(!req.query.email){
        return res.status(404).send("Missing URL Parameter : Email");
    }

    CustomerModel.findOneAndUpdate({email:req.query.email},req.body,{new:true})
        .then((result)=>{
            res.json(result);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
});

router.delete("/customer", (req, res)=>{
    if(!req.query.email){
        return res.status(404).send("Missing URL Parameter : Email");
    }

    CustomerModel.findOneAndDelete(
        {
            email : req.query.email
        })
        .then((result)=>{
            res.json(result);
        })
        .catch((err)=>{
            res.status(500).send(err);
        });
});
    


module.exports = router;
