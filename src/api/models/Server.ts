import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { generalErrors, notFound } from '../middlewares/errors';
import usersRouter from '../routes/users';
import config from '../../config/config';
import dbConnection, { dbSync } from '../../config/database';

class Server {
    private app: Application = express();
    private port: string = config.port || '3000';
    private paths = {
        users: `${config.api.prefix}/users`,
    };

    constructor() {
        //Conectar a la DB
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();

        //Middlewares de errores
        this.errorsHandlers();
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port);
        });
    }

    private async connectDB(): Promise<void> {
        try {
            await dbConnection.authenticate(); //chequeo la conexión

            console.log('Connection has been established successfully.');

            await dbSync(); //sincronizo los modelos
        } catch (error: any) {
            throw new Error(error);
        }
    }

    private middlewares(): void {
        //CORS
        this.app.use(cors());

        //Body parser de Express
        this.app.use(express.json()); //parsea application/json
        this.app.use(express.urlencoded({ extended: false })); // parsea application/x-www-form-urlencoded

        //Directorio público
        this.app.use(express.static('public'));

        // Morgan logger
        this.app.use(morgan('tiny'));
    }

    private routes(): void {
        this.app.use(this.paths.users, usersRouter);
    }

    private errorsHandlers(): void {
        this.app.use(notFound, generalErrors);
    }
}

export default Server;
