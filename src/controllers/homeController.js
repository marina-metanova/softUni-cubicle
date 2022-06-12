
const router = require('./cubeController');
const cubeService = require('../services/cubeServices');

router.get('/', async (req, res) => {
    let { search, from, to} = req.query;
    
    const cubes = await cubeService.getAll(search, from, to);

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;