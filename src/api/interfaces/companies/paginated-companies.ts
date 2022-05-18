import { CompanyOutput } from './company';

export interface PaginatedCompanies {
    totalItems: number;
    data: CompanyOutput[];
    pages: number;
    currentPage: number;
}
