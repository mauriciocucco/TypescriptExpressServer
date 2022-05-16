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

const isDev = config.env === 'development';

export const dbSync = async () => {
    await dbConnection.sync({ alter: isDev });
    console.log('Models Sync successfully');
};

/*Pro tip: reserve using force or alter for development environments 
so you don’t accidentally recreate your production database, losing all 
your data or applying changes to your database that might break your application.*/

export default dbConnection;
