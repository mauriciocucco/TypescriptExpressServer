import { NextFunction, Request, Response } from 'express';
import {
    deleteUser,
    getUserById,
    getUsers,
    getUsersPaginated,
    storeUser,
    updateUser,
} from '../services/users';

export const index = async (
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

export const paginated = async (
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

export const show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getUserById(req.params.id);

        res.json({
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

export const store = async (
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

export const update = async (
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

export const destroy = async (
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
