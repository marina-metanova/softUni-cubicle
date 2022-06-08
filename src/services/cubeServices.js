const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path');

exports.getAll = (search, from, to) => {
    if (search == undefined && from == undefined && to == undefined) {
        return cubes;
    }

    search = search.toLowerCase();

    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search))
        .filter(x => x.difLevel >= from)
        .filter(x => x.difLevel <= to);

    return result;
};

exports.getOne = (cubeId) => {
    return cubes[cubeId - 1];
}
exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length], ...cube});

    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes), {encoding: 'utf-8'});
}