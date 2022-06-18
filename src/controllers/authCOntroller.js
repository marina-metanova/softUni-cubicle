const router = require('express').Router();
const authService = require('../services/authService');

const {sesionName} = require('../constants');

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
    let token = await authService.login(req.body);

    if(!token) {
        return res.redirect('404');
    }
    res.cookie(sesionName, token);
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie(sesionName);
    res.redirect('/');
});

module.exports = router;