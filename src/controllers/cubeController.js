const router = require('express').Router();
const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path');

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

    cubes.push(cube);
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes), {encoding: 'utf-8'})
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })
})
module.exports = router;