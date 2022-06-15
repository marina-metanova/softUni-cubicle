const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        maxlength: 120,
    },
    imageURL: {
        type: String,
        require: true,
    },
    difficultyLevel:{
        type: String,
        require: true,
        min: 1,
        max: 6,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ]
});

cubeSchema.path('imageURL').validate(function() {
    return this.imageURL.startsWith('http')
}, 'Image url should be a link!');

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;