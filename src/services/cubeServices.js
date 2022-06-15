const fs = require('fs/promises');
const Cube = require('../models/cube');
const path = require('path');
const Accessory = require('../models/Accessory');

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

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    // const cubeObjectId = mongoose.Types.ObjectId(cubeId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();

    return cube;
}