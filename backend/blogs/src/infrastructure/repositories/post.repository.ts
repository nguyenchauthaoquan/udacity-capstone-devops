import { Injectable } from '@nestjs/common';
import GenericRepository from './generic.repository';
import PostEntity from '../../core/entities/post.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export default class PostRepository extends GenericRepository<PostEntity> {
  constructor(
    @InjectEntityManager()
    private readonly manager: EntityManager,
  ) {
    super(manager.getRepository(PostEntity));
  }
}
