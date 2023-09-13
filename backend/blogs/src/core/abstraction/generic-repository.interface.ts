import PaginatedListResponseModel from '../models/paginated-list-response.model';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import {
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  UpdateResult,
} from 'typeorm';
import PaginatedListRequestModel from '../models/paginated-list-request.model';

export default interface IGenenricRepository<T> {
  add(
    entities: QueryDeepPartialEntity<T>[] | QueryDeepPartialEntity<T>,
  ): Promise<InsertResult>;
  getAll(
    paginated?: PaginatedListRequestModel,
    options?: FindManyOptions,
  ): Promise<PaginatedListResponseModel<T>>;
  find(
    options: FindOneOptions<T>,
    paginated?: PaginatedListRequestModel,
  ): Promise<T>;
  update(
    criteria: FindOneOptions<T>,
    item: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult>;
  delete(criteria: FindOptionsWhere<T>): Promise<UpdateResult>;
}
