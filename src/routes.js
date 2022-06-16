const experss = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const authController = require('./controllers/authCOntroller');
const accessoryController = require('./controllers/accessoryController');

const router = experss.Router();

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);
router.use('/auth', authController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;
