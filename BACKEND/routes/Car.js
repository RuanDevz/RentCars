const express = require('express')
const Router = express.Router()
const {Car, User} = require('../models')

Router.get('/', async (req,res) =>{
    const getcars = req.body
    const getallcars = await Car.findAll(getcars)
    res.json(getallcars)
})

Router.get('/:id', async (req,res) =>{
    const {id} = req.params
    const getcarbyid = await Car.findByPk(id)
    res.json(getcarbyid)
})



Router.post('/',async  (req,res) =>{
    

    const {img,name,nota,reviews,passageiros,marcha,arcondicionado,portas,price,username} = req.body
    const createnewcar = await Car.create({
            img: img,
            name: name,
            nota: nota,
            reviews: reviews,
            passageiros: passageiros,
            marcha: marcha,
            arcondicionado: arcondicionado,
            portas: portas,
            price: price,
            username: username
    })
    res.status(200).json({msg: "Carro adicionado com sucesso!", createnewcar})
})

Router.post('/:userId/cars', async (req, res) => {
    try {
        const userId = req.params.userId;
        const carData = req.body;

        const user = await User.findByPk(userId);

        const car = await Car.create({
            ...carData,
            userId: user.id
        });

        res.status(201).json({ msg: "Carro adicionado em Meus Carros", car });
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).json({ error: error.message });
    }
});

Router.get('/:userId/cars/:carId', async (req,res) =>{
    const {userId, carId} = req.params

    const user = await User.findByPk(userId)

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const car = await Car.findOne({
        where: {
            id: carId,
            userId: userId
        }
        
    })

    if (!car) {
        return res.status(404).json({ error: "Carro não encontrado ou não pertence a este usuário" });
    }

    res.json(car)
})

Router.delete('/:userId/cars/:carId', async (req, res) => {
    try {
        const {userId, carId} = req.params;

        const user = await User.findByPk(userId);
        

        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const result = await Car.destroy({
            where: {
                id: carId,
                userId: userId,
            }
        });

        if (result) {
            return res.status(200).json({ msg: "Carro removido com sucesso!" });
        } else {
            return res.status(404).json({ error: "Carro não encontrado" });
        }
    } catch (error) {
        console.error('Error deleting car:', error);
        res.status(500).json({ error: error.message });
    }
});

Router.put('/:userId/cars/:carId', async (req, res) => {
    try {
        const { userId, carId } = req.params;
        const carData = req.body; 

        const user = await User.findByPk(userId);
        
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const car = await Car.findOne({
            where: {
                id: carId,
                userId: userId,
            }
        });

        if (!car) {
            return res.status(404).json({ error: "Carro não encontrado" });
        }

        await car.update(carData); 

        return res.status(200).json({ msg: "Carro atualizado com sucesso!", car });
    } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).json({ error: error.message });
    }
});







Router.put('/edit/:id',async (req,res) =>{
    const {id} = req.params
    const updatedcar = req.body

    const car = await Car.findByPk(id)

    if(!car){
        res.status(404).json({error: "Carro não encontrado", })
    }


    await Car.update(updatedcar,{
        where: {id: id}
    })


    res.status(200).json({msg: "Carro atualizado!", updatedcar})
})

Router.delete('/remove/:id', async (req,res) =>{
    const {id} = req.params

    const car = await Car.findByPk(id)

    if(!car){
        res.status(404).json({error: "Carro não encontrado", })
    }

    await car.destroy()

    res.status(200).json({msg: "Carro removido com sucesso!"})
})




module.exports = Router