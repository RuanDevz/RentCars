const express = require('express');
const cors = require('cors');
const db = require('./models');
const dotenv = require('dotenv');
const pg = require('pg');

dotenv.config();

const { Pool } = pg;

const app = express();

app.use(cors());
app.use(express.json());

const Routeruser = require('./routes/user');
const Routercar = require('./routes/Car');

app.use('/user', Routeruser);
app.use('/car', Routercar);

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
  client.release();
});

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
