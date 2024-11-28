import { SearchParams } from 'src/shared/utils/search-params';
import { SearchResult } from 'src/shared/utils/search-result';
import { EntityDefault } from '../../entities/default-entity';
import { IRepository } from './repository.interface';

export interface ISearchRepository<
  E extends EntityDefault,
  Filter = string,
  SearchInput = SearchParams<Filter>,
  SearchOutput = SearchResult<E, Filter>,
> extends IRepository<E> {
  sortableFields: string[];

  search(props: SearchInput): Promise<SearchOutput>;
}
