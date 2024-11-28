import { EntityDefault } from 'src/shared/domain/entities/default-entity';
import { DefaultResponse } from '../response/default-response';
import { SearchResult } from 'src/shared/utils/search-result';
export declare namespace DefaultMapper {
    class PaginationMapper {
        static toResponse<Item = any>(items: Item[], result: SearchResult<EntityDefault>): DefaultResponse.PaginationResponse<Item>;
    }
}
