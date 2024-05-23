const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')

app.use(cors())

const Routeruser = require('./routes/user')
const Routercar = require('./routes/Car')

app.use(express.json())

app.use('/user',Routeruser)
app.use('/car', Routercar)

db.sequelize.sync().then(() =>{
    app.listen(3000, () => console.log('Servidor rodandoo'))
})