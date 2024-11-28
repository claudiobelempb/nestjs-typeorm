export declare namespace DefaultResponse {
    type SortDirection = 'asc' | 'desc';
    type PaginationResponse<Item = any> = {
        items: Item[];
        total: number;
        currentPage: number;
        lastPage: number;
        perPage: number;
    };
    type SearchResponse<Filter = string> = {
        page?: number;
        perPage?: number;
        sort?: string | null;
        sortDir?: SortDirection | null;
        filter?: Filter | null;
    };
}
