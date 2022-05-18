import NotFound from '../errors/not-found';
import {
    ApplicationInput,
    ApplicationOutput,
} from '../interfaces/applications/applications';
import { PaginatedParams } from '../interfaces/paginated-params';
import Application from '../models/Application';
import { PaginatedApplications } from '../interfaces/applications/paginated-applications';

export const getApplications = async (): Promise<ApplicationOutput[]> => {
    const applications = await Application.findAll();

    return applications;
};

export const getApplicationsPaginated = async (
    queryParams: PaginatedParams
): Promise<PaginatedApplications> => {
    const {
        size = 10,
        page: currentPage = 1,
        orderBy = 'id',
        orderType = 'DESC',
    } = queryParams;

    const offset = (currentPage - 1) * size;

    const { count: totalItems, rows: data } = await Application.findAndCountAll(
        {
            limit: size,
            offset,
            order: [[orderBy, orderType]],
        }
    );

    const pages = Math.ceil(totalItems / size);

    return { totalItems, data, currentPage, pages };
};

export const getApplicationById = async (id: string) => {
    const application = await Application.findByPk();

    if (!application) {
        throw new NotFound('Application not found.');
    }

    return application;
};

export const storeApplication = async (
    body: ApplicationInput
): Promise<ApplicationOutput> => {
    try {
        const application = await Application.create(body);

        return application;
    } catch (error) {
        console.log('STORE APP ', error);
        throw error;
    }
};

export const updateApplication = async (
    id: string,
    body: Partial<ApplicationInput>
): Promise<ApplicationOutput> => {
    try {
        const application = await Application.findByPk(id);

        if (!application) {
            throw new NotFound('Application not found.');
        }

        const updatedApplication = await application.update(body);

        await application.save();

        return updatedApplication;
    } catch (error) {
        console.log('UPDATE APP: ', error);
        throw error;
    }
};

export const deleteApplication = async (id: string): Promise<number> => {
    try {
        const deletedApplication = await Application.destroy({
            where: { id },
        });

        return deletedApplication;
    } catch (error) {
        console.log('DELETE APP: ', error);
        throw error;
    }
};
