export interface PaginatedParams {
    size?: number;
    page?: number;
    orderBy?: string;
    orderType?: OrderType;
}

type OrderType = 'ASC' | 'DESC';
