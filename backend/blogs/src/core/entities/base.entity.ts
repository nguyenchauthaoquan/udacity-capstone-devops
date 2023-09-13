export default abstract class BaseEntity<T> {
  abstract id: T;
  abstract createdDate: Date;
  abstract createdBy: string;
  abstract modifiedDate?: Date;
  abstract modifiedBy?: string;
  abstract deletedDate?: Date;
}
