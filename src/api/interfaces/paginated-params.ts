export interface PaginatedParams {
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderType?: OrderType;
}

type OrderType = 'ASC' | 'DESC';
