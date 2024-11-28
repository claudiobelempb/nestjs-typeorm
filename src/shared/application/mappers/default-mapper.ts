import { EntityDefault } from 'src/shared/domain/entities/default-entity';
import { DefaultResponse } from '../response/default-response';
import { SearchResult } from 'src/shared/utils/search-result';

export namespace DefaultMapper {
  export class PaginationMapper {
    static toResponse<Item = any>(
      items: Item[],
      result: SearchResult<EntityDefault>,
    ): DefaultResponse.PaginationResponse<Item> {
      return {
        items,
        total: result.total,
        currentPage: result.currentPage,
        lastPage: result.lastPage,
        perPage: result.perPage,
      };
    }
  }
}
