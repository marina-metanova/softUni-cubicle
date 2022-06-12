const fs = require('fs/promises');
const Cube = require('../models/cube');
const path = require('path');

exports.getAll = async (search, from, to) => {
    let cubes = await Cube.find().lean();
    
    // if (search == undefined && from == undefined && to == undefined) {
    //     return cubes;
    // }

    // search = search.toLowerCase();

    // const result = cubes
    //     .filter(x => x.name.toLowerCase().includes(search))
    //     .filter(x => x.difLevel >= from)
    //     .filter(x => x.difLevel <= to);

    return cubes;
};

exports.getOne = (cubeId) => Cube.findById(cubeId); 

exports.create = (cube) => Cube.create(cube);