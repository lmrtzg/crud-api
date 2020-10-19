import IPostsRepository from '../../repositories/IPostsRepository';
import IDeletePostDTO from './IDeletePostDTO';

class DeletePostUseCase {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async exec(data: IDeletePostDTO) {
    const QueryResCode = await this.postsRepository.deletePost(data.customId);
    return QueryResCode;
  }
}

export default DeletePostUseCase;
