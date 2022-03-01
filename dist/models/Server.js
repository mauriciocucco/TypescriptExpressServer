"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const errors_1 = require("../middlewares/errors");
const users_1 = __importDefault(require("../routes/users"));
const config_1 = __importDefault(require("../database/config"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users',
        };
        this.app = (0, express_1.default)();
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
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port);
        });
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.default.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Body parser de Express
        this.app.use(express_1.default.json()); //parsea application/json
        this.app.use(express_1.default.urlencoded({ extended: false })); // parsea application/x-www-form-urlencoded
        //Directorio público
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.users, users_1.default);
    }
    errorsHandlers() {
        this.app.use(errors_1.notFound, errors_1.generalErrors);
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map