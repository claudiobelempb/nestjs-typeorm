"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParams = void 0;
class SearchParams {
    constructor(props = {}) {
        this._perPage = 15;
        this.page = props.page;
        this.perPage = props.perPage;
        this.sort = props.sort;
        this.sortDir = props.sortDir;
        this.filter = props.filter;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        let _page = +value;
        if (Number.isNaN(_page) || _page <= 0 || parseInt(_page) !== _page) {
            _page = 1;
        }
        this._page = _page;
    }
    get perPage() {
        return this._perPage;
    }
    set perPage(value) {
        let _perPage = value === true ? this._perPage : +value;
        if (Number.isNaN(_perPage) ||
            _perPage <= 0 ||
            parseInt(_perPage) !== _perPage) {
            _perPage = this._perPage;
        }
        this._perPage = _perPage;
    }
    get sort() {
        return this._sort;
    }
    set sort(value) {
        this._sort =
            value === null || value === undefined || value === '' ? null : `${value}`;
    }
    get sortDir() {
        return this._sortDir;
    }
    set sortDir(value) {
        if (!this._sort) {
            this._sortDir = null;
            return;
        }
        const dir = `${value}`.toLowerCase();
        this._sortDir = dir !== 'asc' && dir !== 'desc' ? 'desc' : dir;
    }
    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter =
            value === null || value === undefined || value === ''
                ? null
                : `${value}`;
    }
}
exports.SearchParams = SearchParams;
//# sourceMappingURL=search-params.js.map