const express = require('express')
const Router = express.Router()
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
const {User} = require('../models')
const Authmiddlaware = require('../Middlaware/Auth')


Router.get('/', async (req,res) =>{
    const getAllusers = await User.findAll()
    res.json(getAllusers)
    
})

Router.get('/:userId', async (req,res) =>{
    const userId = req.params.userId
    const getuserbyid = await User.findByPk(userId)
    res.json(getuserbyid)


})

Router.get('/:userId/cars', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId, {
            include: [{
                model: Car,
                as: 'cars'
            }]
        });

        res.status(200).json(user.cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});



Router.post('/', async (req, res) =>{
    const {username, password}  = req.body

    const hashpassword = await bcrypt.hash(password, 10)

    const existinguser = await User.findOne({where: {username}})

    if(existinguser){
        return res.json({error: "Usuario já cadastrado!"})
    }

    const userCreated = await User.create({
        username,
        password: hashpassword
    })
    res.status(200).json({msg: "Usuario criado com sucesso!", userCreated})
})

Router.post('/auth', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ error: "Credenciais incorretas!" });
        }

        const accessToken = sign({ username: user.username, id: user.id }, "Tokenimportant");

        res.json({ accessToken, user });
    } catch (error) {
        console.error("Erro durante a autenticação:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});
Router.get('/dashboard', Authmiddlaware, (req,res) =>{
  
    const accessToken = req.headers.authorization.split(' ')[1];

    const user = req.user;

    res.json({ accessToken, user });
})





module.exports = Router