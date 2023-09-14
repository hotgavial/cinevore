const bcrypt = require('bcrypt');
const User = require('../models/User')

module.exports = (app) => {
    app.post('/register', async (req, res) => {

        try {
            const { pseudo, password } = req.body;
            const existingUser = await User.findOne({ where: { pseudo } });

            if (existingUser) {
                return res.status(409).json({ error: 'Le nom d\'utilisateur est déjà pris.' });
            }
        
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ pseudo, password: hashedPassword });
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
            res.status(500).json({ error: 'Une erreur est survenue lors de l\'enregistrement de l\'utilisateur.' });
        }
    })
}