import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import BaseEntity from './base.entity';
import AddPostCommand from '../../applications/commands/add-post.command';

@Entity({
  name: 'posts',
})
export default class PostEntity extends BaseEntity<string> {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    name: 'title',
  })
  title: string;
  @Column({
    name: 'content',
  })
  content: string;
  @CreateDateColumn()
  createdDate: Date;
  @Column({
    name: 'created_by',
    default: '',
  })
  createdBy: string;
  @UpdateDateColumn({
    name: 'modified_date',
    default: undefined,
    nullable: true,
  })
  modifiedDate?: Date;
  @Column({
    name: 'modified_by',
    nullable: true,
  })
  modifiedBy: string;

  @DeleteDateColumn({
    name: 'deleted_date',
    nullable: true,
  })
  deletedDate: Date;

  constructor(params = {} as AddPostCommand) {
    super();
    // this.id = params?.id;
    this.title = params?.title;
    this.content = params?.content;
    // this.createdDate = params?.createdDate;
    // this.createdBy = params?.createdBy;
    // this.modifiedDate = params?.modifiedDate;
    // this.modifiedBy = params?.modifiedBy;
    // this.deletedDate = params?.deletedDate;
  }
}
