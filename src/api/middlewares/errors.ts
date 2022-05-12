import { NextFunction, Request, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Route not found.");

    error.status = 404; // eslint-disable-line no-param-reassign

    next(error);
}

export const generalErrors = (err: any, req: Request, res: Response, next: NextFunction) => {

    if (!err) { //no hay error
        return next();    
    }

    console.log('ERROR DESDE EL HANDLER: ', err);

    if (err.validationErrors) {
        return res.status(err.status).json({ errors: err.validationErrors });
    }

    res.status(err.status || 500).json({ error: err.message || 'Internal server error.' });
}