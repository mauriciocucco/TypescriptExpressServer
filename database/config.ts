import { Sequelize } from 'sequelize';

const db = new Sequelize('node_1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
