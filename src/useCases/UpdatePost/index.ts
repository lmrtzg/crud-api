import MongoosePostRepository from '../../repositories/implementations/mongoose/MongoosePostsRepository';
import UpdatePostController from './UpdatePostController';
import UpdatePostUseCase from './UpdatePostUseCase';

const mongoosePostRepository = new MongoosePostRepository();
const updatePostUseCase = new UpdatePostUseCase(mongoosePostRepository);
const updatePostController = new UpdatePostController(updatePostUseCase);

export { updatePostUseCase, updatePostController };
