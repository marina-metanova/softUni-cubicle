const fs = require('fs/promises');
const Cube = require('../models/cube');
const path = require('path');
const Accessory = require('../models/Accessory');

exports.getAll = async (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 0;

    let cubes = await Cube.find().lean();


    // const result = cubes
    //     .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    //     .filter(x => x.difLevel >= from)
    //     .filter(x => x.difLevel <= to);

    return cubes;
};

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

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

exports.edit = async (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = async (cubeId) => Cube.findByIdAndDelete(cubeId);