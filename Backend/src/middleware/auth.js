const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

class Auth {
    static verifyToken(req, res, next) {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }

        jwt.verify(token.replace('Bearer ', ''), secretKey, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = decoded;
            next();
        });
    }
}

module.exports = Auth.verifyToken;