const express = require('express');
const router = express.Router();
const warehouse = require('../models/warehouse');

// get a list of products from the database
router.get('/warehouse',function(req,res,next){
    warehouse.find({}).then(function(warehouse){
        res.send(warehouse);
    }).catch(next);
});

// add a new product to database
router.post('/warehouse',function(req,res,next){
    warehouse.create(req.body).then(function(warehouse){
        res.send(warehouse);
    }).catch(next);
});

// update a product in the database
router.put('/warehouse/:id',function(req,res,next){
    warehouse.findOneAndUpdate({_id: req.params.id},req.body).then(function(warehouse){
        warehouse.findOne({_id: req.params.id}).then(function(warehouse){
            res.send(warehouse);
        });
    });
});

// delete a product in the database
router.delete('/warehouse/:id',function(req,res,next){
    warehouse.findOneAndDelete({_id: req.params.id}).then(function(warehouse){
        res.send(warehouse);
    });
});

module.exports = router;
