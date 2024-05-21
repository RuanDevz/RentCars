const { verify } = require('jsonwebtoken');

const Authmiddleware = (req, res, next) => {
    const accessToken = req.headers.authorization.split(' ')[1];

    verify(accessToken, "Tokenimportant", (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ error: "Token inválido" });
        } else {
            req.user = decodedToken;
            next();
        }
    });
};

module.exports = Authmiddleware;
