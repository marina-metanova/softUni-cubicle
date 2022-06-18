const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const { sesionName, secret } = require('../constants');

const jwtVetyfy = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    let token = req.cookies['session'];
    if (token) {
        try {
            let decodetToken = await jwt.verify(token, secret);
            req.user = decodetToken;
            res.locals.user = decodetToken;
        } catch (error) {
            console.log(error);
            return res.redirect('/404');
        }
    }
    next();
};

exports.isAuth = (req, res, next) => {
    req.user;
    if(!req.user) {
        return res.redirect('/');
    }
    next();
}

