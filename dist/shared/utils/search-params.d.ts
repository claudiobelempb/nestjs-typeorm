export type SorDirection = 'asc' | 'desc';
export type SearchProps<Filter = string> = {
    page?: number;
    perPage?: number;
    sort?: string | null;
    sortDir?: SorDirection | null;
    filter?: Filter | null;
};
export declare class SearchParams<Filter = string> {
    protected _page: number;
    protected _perPage: number;
    protected _sort: string | null;
    protected _sortDir: SorDirection | null;
    protected _filter?: Filter | null;
    constructor(props?: SearchProps<Filter>);
    get page(): number;
    private set page(value);
    get perPage(): number;
    private set perPage(value);
    get sort(): string | null;
    private set sort(value);
    get sortDir(): string | null;
    private set sortDir(value);
    get filter(): Filter | null;
    private set filter(value);
}
