const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
        validate: {
            // validator: /^htttp?/g,
            validator: function() {
                return this.imageURL.startsWith('http');
            },
            message: 'Image urlw should start with http/s'
        }
    },
    description: {
        type: String,
        maxLength: 120,
        required: true,
    },
    cube: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube',
    }]
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;