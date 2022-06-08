const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path');

exports.getOne = (cubeId) => {
    return cubes[cubeId - 1];
}
exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length], ...cube});

    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes), {encoding: 'utf-8'});
}