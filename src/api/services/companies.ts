import NotFound from '../errors/not-found';
import { CompanyInput, CompanyOutput } from '../interfaces/companies/company';
import { PaginatedCompanies } from '../interfaces/companies/paginated-companies';
import { PaginatedParams } from '../interfaces/paginated-params';
import Company from '../models/Company';

export const getCompanies = async (): Promise<CompanyOutput[]> => {
    const companies = await Company.findAll();

    return companies;
};

export const getCompaniesPaginated = async (
    queryParams: PaginatedParams
): Promise<PaginatedCompanies> => {
    const {
        size = 10,
        page: currentPage = 1,
        orderBy = 'id',
        orderType = 'DESC',
    } = queryParams;

    const offset = (currentPage - 1) * size;

    const { count: totalItems, rows: data } = await Company.findAndCountAll({
        limit: size,
        offset,
        order: [[orderBy, orderType]],
    });

    const pages = Math.ceil(totalItems / size);

    return { totalItems, data, currentPage, pages };
};

export const getCompanyById = async (id: string) => {
    const company = await Company.findByPk();

    if (!company) {
        throw new NotFound('Company not found.');
    }

    return company;
};

export const storeCompany = async (
    body: CompanyInput
): Promise<CompanyOutput> => {
    try {
        const company = await Company.create(body);

        return company;
    } catch (error) {
        console.log('STORE COMPANY ', error);
        throw error;
    }
};

export const updateCompany = async (
    id: string,
    body: Partial<CompanyInput>
): Promise<CompanyOutput> => {
    try {
        const company = await Company.findByPk(id);

        if (!company) {
            throw new NotFound('Company not found.');
        }

        const updatedCompany = await company.update(body);

        await company.save();

        return updatedCompany;
    } catch (error) {
        console.log('UPDATE COMPANY: ', error);
        throw error;
    }
};

export const deleteCompany = async (id: string): Promise<number> => {
    try {
        const deletedCompany = await Company.destroy({
            where: { id },
        });

        return deletedCompany;
    } catch (error) {
        console.log('DELETE COMPANY: ', error);
        throw error;
    }
};
