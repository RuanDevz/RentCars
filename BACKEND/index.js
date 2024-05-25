const express = require('express');
const cors = require('cors');
const db = require('./models');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const Routeruser = require('./routes/user');
const Routercar = require('./routes/Car');

app.use('/user', Routeruser);
app.use('/car', Routercar);

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
