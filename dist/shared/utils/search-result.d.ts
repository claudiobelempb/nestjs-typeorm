import { EntityDefault } from '../domain/entities/default-entity';
export type SorDirection = 'asc' | 'desc';
export type SearchResultProps<E extends EntityDefault, Filter> = {
    items: E[];
    total: number;
    currentPage: number;
    perPage: number;
    sort: string | null;
    sortDir: string | null;
    filter: Filter | null;
};
export declare class SearchResult<E extends EntityDefault, Filter = string> {
    readonly items: E[];
    readonly total: number;
    readonly currentPage: number;
    readonly perPage: number;
    readonly lastPage: number;
    readonly sort: string | null;
    readonly sortDir: string | null;
    readonly filter: Filter | null;
    constructor(props: SearchResultProps<E, Filter>);
    toJson(forceEntity?: boolean): {
        items: E[] | Required<any>[];
        total: number;
        currentPage: number;
        perPage: number;
        lastPage: number;
        sort: string;
        sortDir: string;
        filter: Filter;
    };
}
