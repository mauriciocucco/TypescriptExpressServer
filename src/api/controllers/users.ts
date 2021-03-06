import { NextFunction, Request, RequestHandler, Response } from 'express';
import {
    deleteUser,
    getUserById,
    getUsers,
    getUsersPaginated,
    storeUser,
    updateUser,
} from '../services/users';

export const index: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await getUsers();

        res.json({
            data: users,
        });
    } catch (error) {
        next(error);
    }
};

export const paginated: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await getUsersPaginated(req.query);

        res.json({
            ...users,
        });
    } catch (error) {
        next(error);
    }
};

export const show: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await getUserById(req.params.id);

        res.json({
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

export const store: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newUser = await storeUser(req.body);

        res.json({
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
};

export const update: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);

        res.json({
            data: updatedUser,
        });
    } catch (error) {
        next(error);
    }
};

export const destroy: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const deletedUser = await deleteUser(req.params.id);

        res.json({
            data: deletedUser,
        });
    } catch (error) {
        next(error);
    }
};
