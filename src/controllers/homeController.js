const express = require('express');
const cubes = require('../db.json');
const { route } = require('./cubeController');
const router = require('./cubeController');

router.get('/', (req, res) => {
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;