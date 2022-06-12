const mongoose = requite('mongoose');

const cubeSchema = new mongoose.cubeSchema({
    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        maxlength: 120,
    },
    imageUrl: {
        type: String,
        require: true,
    };
    difficultyLevel:{
        type: String,
        require: true,
        min: 1,
        max: 6,
    }
});

cubeSchema.path('imageUrl').validate(function() {
    return this.name.startsWith('http')
}, 'Image url should be a link!');

const Cube = mongoose.model('cube', cubeSchema);

modules.exports = Cube;