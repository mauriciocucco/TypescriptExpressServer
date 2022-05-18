import { NextFunction, Request, RequestHandler, Response } from 'express';
import {
    deleteApplication,
    getApplicationById,
    getApplications,
    getApplicationsPaginated,
    storeApplication,
    updateApplication,
} from '../services/applications';

export const index: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const applications = await getApplications();

        res.json({
            data: applications,
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
        const applications = await getApplicationsPaginated(req.query);

        res.json({
            ...applications,
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
        const application = await getApplicationById(req.params.id);

        res.json({
            data: application,
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
        const newApplication = await storeApplication(req.body);

        res.json({
            data: newApplication,
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
        const updatedApplication = await updateApplication(
            req.params.id,
            req.body
        );

        res.json({
            data: updatedApplication,
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
        const deletedApplication = await deleteApplication(req.params.id);

        res.json({
            data: deletedApplication,
        });
    } catch (error) {
        next(error);
    }
};
