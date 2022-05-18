import { ApplicationOutput } from './applications';

export interface PaginatedApplications {
    totalItems: number;
    data: ApplicationOutput[];
    pages: number;
    currentPage: number;
}
