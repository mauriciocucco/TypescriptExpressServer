import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { generalErrors, notFound } from '../middlewares/errors';
import usersRouter from '../routes/users';
import { EnvironmentConfig } from '../../config/environment';
import db from '../../config/database';

class Server extends EnvironmentConfig {
    private app: Application = express();
    private port: string = this.getEnvironmentValue('PORT') || '3000';
    private paths = {
        users: '/api/users',
    };

    constructor() {
        super();

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
            await db.authenticate();
            console.log('Connection has been established successfully.');
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
