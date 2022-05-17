import { UserOutput } from './user';

export interface PaginatedUsers {
    totalItems: number;
    data: UserOutput[];
    pages: number;
    currentPage: number;
}
