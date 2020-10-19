import MongoosePostRepository from '../../repositories/implementations/mongoose/MongoosePostsRepository';
import DeletePostController from './DeletePostController';
import DeletePostUseCase from './DeletePostUseCase';

const mongoosePostRepository = new MongoosePostRepository();
const deletePostUseCase = new DeletePostUseCase(mongoosePostRepository);
const deletePostController = new DeletePostController(deletePostUseCase);

export { deletePostUseCase, deletePostController };
