const router = require('express').Router();
const authService = require('../services/authService');

// Register
router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    let createdUser = await authService.register(req.body);

    if(createdUser) {
        res.redirect('/auth/login');
    } else {
        res.redirect('/404')
    }
    res.redirect('/auth/register');
});

// Login
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    console.log(req.body);

    res.redirect('/auth/login');
});

module.exports = router;