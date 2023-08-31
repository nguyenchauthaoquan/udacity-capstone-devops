import IGenenricRepository from '../../core/abstraction/generic-repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import {
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  Repository,
  UpdateResult,
} from 'typeorm';
import PaginatedListResponseModel from '../../core/models/paginated-list-response.model';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import PaginatedListRequestModel from '../../core/models/paginated-list-request.model';

@Injectable()
export default class GenericRepository<T> implements IGenenricRepository<T> {
  constructor(
    @InjectEntityManager()
    private readonly repository: Repository<T>,
  ) {}

  add(
    entities: QueryDeepPartialEntity<T>[] | QueryDeepPartialEntity<T>,
  ): Promise<InsertResult> {
    return Promise.resolve(this.repository.insert(entities));
  }

  delete(criteria: FindOptionsWhere<T>): Promise<UpdateResult> {
    return Promise.resolve(this.repository.softDelete(criteria));
  }

  find(options: FindOneOptions<T>): Promise<T> {
    return Promise.resolve(this.repository.findOneOrFail(options));
  }

  async getAll(
    paginated?: PaginatedListRequestModel,
    options?: FindManyOptions,
  ): Promise<PaginatedListResponseModel<T>> {
    const entities = await this.repository.find(options);

    if (paginated?.page && paginated?.size) {
      const page = parseInt(paginated.page);
      const size = parseInt(paginated.size);
      const paginatedOptions = Object.assign({
        skip: size * (page - 1),
        take: size,
        ...options,
      });
      const count = entities.length;
      const lastPage = Math.floor(count / size) + 1;
      const paginatedEntities = await this.repository.find(paginatedOptions);

      return {
        totalCount: entities.length,
        lastPage: lastPage,
        currentPage: lastPage < page ? lastPage : page,
        perPage: size,
        items: paginatedEntities,
      };
    } else {
      return {
        totalCount: entities.length,
        items: entities,
      };
    }
  }

  update(
    criteria: FindOptionsWhere<T>,
    item: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult> {
    return Promise.resolve(this.repository.update(criteria, item));
  }
}
