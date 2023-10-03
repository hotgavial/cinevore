const bcrypt = require('bcrypt');
const User = require('../models/User')
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

module.exports = (app) => {
    app.post('/signIn', async (req, res) => {
        try {
            const { pseudo, password } = req.body;
            const existingUser = await User.findOne({ where: { pseudo: pseudo } });

            if (existingUser && await bcrypt.compare(password, existingUser.password)) {
                const token = jwt.sign({ pseudo: existingUser.pseudo }, secretKey, { expiresIn: '1h' });
                res.status(200).json({ token: token, pseudo: existingUser.pseudo, idUser: existingUser.idUser });
            } else {
                res.status(401).json({ message: 'Échec de la connexion' });
            }

        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
            res.status(500).json({ error: 'Une erreur est survenue lors de la tentative de connexion' });
        }
    })
}