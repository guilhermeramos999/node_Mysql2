const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection({
    host:       process.env.HOST_DB,
    user:       process.env.USER_DB,
    password:   process.env.PASS_DB,
    database:   process.env.DATABASE_DB
});

const createTable = "CREATE TABLE IF NOT EXISTS testesqlnode (id int not null auto_increment,nome char(255),email char(255),PRIMARY KEY(id))";

connection.query(createTable, () => console.log('Tabela criada ou já criada'));

connection.query(`SELECT * FROM testesqlnode`, (_,result) => console.table(result));