const Alien = require('../model/model');

const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const x = await Alien.find();
        res.json(x);
    } catch (err) {
        res.send('error' + err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const x = await Alien.findById(req.params.id);
        res.json(x);
    } catch (err) {
        res.send('error' + err);
    }
});

router.post('/', async (req, res) => {
    try {

        
        const x = new Alien({
            name: req.body.name, 
            Tech: req.body.Tech, 
            Subject: req.body.Subject
        });

        const status = await x.save();

        res.json({status});

    } catch (err) {
        res.send('Error '+ err)
    }
})


module.exports = router;