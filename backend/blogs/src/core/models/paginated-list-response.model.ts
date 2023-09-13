export default class PaginatedListResponseModel<T> {
  currentPage?: number;
  lastPage?: number;
  perPage?: number;
  totalCount?: number;
  items: T[];
}
