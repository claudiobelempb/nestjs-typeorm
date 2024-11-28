"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMapper = void 0;
var DefaultMapper;
(function (DefaultMapper) {
    class PaginationMapper {
        static toResponse(items, result) {
            return {
                items,
                total: result.total,
                currentPage: result.currentPage,
                lastPage: result.lastPage,
                perPage: result.perPage,
            };
        }
    }
    DefaultMapper.PaginationMapper = PaginationMapper;
})(DefaultMapper || (exports.DefaultMapper = DefaultMapper = {}));
//# sourceMappingURL=default-mapper.js.map