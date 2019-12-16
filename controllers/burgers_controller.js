const express = require('express');
const router = express.Router();
const burger = require('../models/burger')

router.get('/', (req, res) =>{
    burger.all((data) => {
        console.log(data);
        res.render('index', {burgers: data});
    })
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_name, result => {
        console.log(result);
        res.redirect('/');
    })
})

router.put('/api/burgers/:id', (req, res) => {
    burger.update(req.params.id, result => {
        console.log(result);
            res.status(200).end();
          })
    })

router.delete('/api/burgers/:id', (req, res) => {
    burger.delete(req.params.id, result => {
        console.log(result);
        res.status(200).end();
    })
})

module.exports = router;