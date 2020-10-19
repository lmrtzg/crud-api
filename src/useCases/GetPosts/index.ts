import MongoosePostRepository from '../../repositories/implementations/mongoose/MongoosePostsRepository';
import GetPostsController from './GetPostsController';
import GetPostsUseCase from './GetPostsUseCase';

const mongoosePostRepository = new MongoosePostRepository();
const getPostsUseCase = new GetPostsUseCase(mongoosePostRepository);
const getPostsController = new GetPostsController(getPostsUseCase);

export { getPostsUseCase, getPostsController };
