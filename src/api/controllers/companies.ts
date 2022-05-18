import { NextFunction, Request, RequestHandler, Response } from 'express';
import {
    deleteCompany,
    getCompanies,
    getCompaniesPaginated,
    getCompanyById,
    storeCompany,
    updateCompany,
} from '../services/companies';

export const index: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const companies = await getCompanies();

        res.json({
            data: companies,
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
        const companies = await getCompaniesPaginated(req.query);

        res.json({
            ...companies,
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
        const company = await getCompanyById(req.params.id);

        res.json({
            data: company,
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
        const newCompany = await storeCompany(req.body);

        res.json({
            data: newCompany,
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
        const updatedCompany = await updateCompany(req.params.id, req.body);

        res.json({
            data: updatedCompany,
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
        const deletedCompany = await deleteCompany(req.params.id);

        res.json({
            data: deletedCompany,
        });
    } catch (error) {
        next(error);
    }
};
