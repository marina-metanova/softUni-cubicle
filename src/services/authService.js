const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltRaunds = 10

exports.register = async ({username, password, repeatPassword}) => {
    if(password !== repeatPassword) {
        return false;
    }

    let hashedPassword = await bcrypt.hash(password, saltRaunds);

    let createdUser = User.create({
        username,
        password: hashedPassword,
    })
    
    return createdUser;
};