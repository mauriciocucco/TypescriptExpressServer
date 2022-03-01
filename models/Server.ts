import express, { Application } from 'express';
import cors from 'cors';
import { generalErrors, notFound } from '../middlewares/errors';
import usersRouter from '../routes/users';
import db from '../database/config';

class Server {
    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

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

    private  async connectDB(): Promise<void> {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
            
        } catch (error) {
            throw new Error(error);
        }
    }

    private middlewares(): void {
        //CORS
        this.app.use(cors());

        //Body parser de Express
        this.app.use(express.json()); //parsea application/json
        this.app.use(express.urlencoded({extended: false})); // parsea application/x-www-form-urlencoded

        //Directorio público
        this.app.use(express.static('public'));
    }

    private routes(): void {
        this.app.use(this.paths.users, usersRouter);
    }

    private errorsHandlers(): void {
        this.app.use(notFound, generalErrors);
    }
}

export default Server;

