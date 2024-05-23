const express = require('express')
const Router = express.Router()
const {Car} = require('../models')

Router.get('/', async (req,res) =>{
    const getcars = req.body
    const getallcars = await Car.findAll(getcars)
    res.json(getallcars)
})

Router.post('/',async  (req,res) =>{
    const {img,name,nota,reviews,passageiros,marcha,arcondicionado,portas,price} = req.body
    const createnewcar = await Car.create({
            img: img,
            name: name,
            nota: nota,
            reviews: reviews,
            passageiros: passageiros,
            marcha: marcha,
            arcondicionado: arcondicionado,
            portas: portas,
            price: price
    })
    res.status(200).json({msg: "Carro adicionado com sucesso!", createnewcar})
})

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