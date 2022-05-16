import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error('⚠️ No se pudo encontrar el archivo .env ⚠️');
}

export default {
    //Server
    port: process.env.PORT as string,

    //Conexión a la base de datos
    dbName: process.env.DB_NAME as string,
    dbUser: process.env.DB_USER as string,
    dbHost: process.env.DB_HOST as string,
    dbDriver: process.env.DB_DRIVER,
    dbPassword: process.env.DB_PASSWORD as string,
    dbPort: parseInt(process.env.DB_PORT as string, 10),

    //API
    api: {
        prefix: '/api',
    },
};
