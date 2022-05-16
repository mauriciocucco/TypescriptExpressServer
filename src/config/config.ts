import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: process.env.PORT as string,
    /**
     * DATABASE
     */
    dbName: process.env.DB_NAME as string,
    dbUser: process.env.DB_USER as string,
    dbHost: process.env.DB_HOST as string,
    dbDriver: process.env.DB_DRIVER,
    dbPassword: process.env.DB_PASSWORD as string,
    dbPort: parseInt(process.env.DB_PORT as string, 10),
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
};
