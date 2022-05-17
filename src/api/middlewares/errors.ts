import { NextFunction, Request, Response } from 'express';
import NotFound from '../errors/not-found';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new NotFound('Route not found.');

    next(error);
};

export const generalErrors = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!err) {
        //no hay error
        return next();
    }

    console.log('ERROR DESDE EL HANDLER: ', err);

    res.status(err.status || 500).json({
        error: err.message || 'Internal server error.',
    });
};
