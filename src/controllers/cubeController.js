const router = require('express').Router();
const cubeService = require('../services/cubeServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    const cube = req.body;
    console.log(cube);
    
    if(cube.name.length < 2) {
        res.status(400).send('Invalid request');
        return;
    }

    cubeService.save(cube)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })
})
module.exports = router;