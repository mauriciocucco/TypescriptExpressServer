import { Sequelize, Dialect } from 'sequelize';
import config from './config';

const dbConnection = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: config.dbDriver as Dialect,
        port: config.dbPort,
    }
);

export default dbConnection;
