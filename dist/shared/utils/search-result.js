"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = void 0;
class SearchResult {
    constructor(props) {
        this.items = props.items;
        this.total = props.total;
        this.currentPage = props.currentPage;
        this.perPage = props.perPage;
        this.lastPage = Math.ceil(this.total / this.perPage);
        this.sort = props.sort ?? null;
        this.sortDir = props.sortDir ?? null;
        this.filter = props.filter ?? null;
    }
    toJson(forceEntity = false) {
        return {
            items: forceEntity ? this.items.map((item) => item.toJSON()) : this.items,
            total: this.total,
            currentPage: this.currentPage,
            perPage: this.perPage,
            lastPage: this.lastPage,
            sort: this.sort,
            sortDir: this.sortDir,
            filter: this.filter,
        };
    }
}
exports.SearchResult = SearchResult;
//# sourceMappingURL=search-result.js.map