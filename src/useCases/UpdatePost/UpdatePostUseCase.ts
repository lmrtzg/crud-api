import IPostsRepository from '../../repositories/IPostsRepository';
import IUpdatePostDTO from './IUpdatePostDTO';

class UpdatePostUseCase {
  private postsRepository: IPostsRepository

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async exec(data: IUpdatePostDTO) {
    const QueryResCode = this.postsRepository.updatePost(data.customId, data.newPost);
    return QueryResCode;
  }
}

export default UpdatePostUseCase;
