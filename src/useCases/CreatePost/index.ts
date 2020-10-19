import MongoosePostRepository from '../../repositories/implementations/mongoose/MongoosePostsRepository';
import CreatePostController from './CreatePostController';
import CreatePostUseCase from './CreatePostUseCase';

const mongoosePostRepository = new MongoosePostRepository();
const createPostUseCase = new CreatePostUseCase(mongoosePostRepository);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController };
