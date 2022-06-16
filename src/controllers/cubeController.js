const router = require('express').Router();
const cubeService = require('../services/cubeServices');
const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;
    
    if(cube.name.length < 2) {
        res.status(400).send('Invalid request');
        return;
    }

    cubeService.create(cube)
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    
    res.render('details', { cube });
});

router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const accessories = await accessoryService.getAll().lean();

    res.render('accessory/attach', {cube, accessories});
});

router.post('/:cubeId/attach-accessory', async (req, res) => {
    const accessoryId = req.body.accessory;

    await cubeService.attachAccessory(req.params.cubeId, accessoryId);

    res.redirect(`/cube/details/${req.params.cubeId}`);
});

router.get('/:cubeId/edit', async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    
    if(!cube){
        return res.redirect('/404');
    }

    res.render('cube/edit', { cube });
});

router.post('/:cubeId/edit', async (req, res) => {
    let modifCube = await cubeService.edit(req.params.cubeId, req.body);

    res.redirect(`/cube/details/${modifCube._id}`);
});

module.exports = router;