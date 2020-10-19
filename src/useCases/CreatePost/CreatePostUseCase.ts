import IPostsRepository from '../../repositories/IPostsRepository';
import ICreatePostDTO from './ICreatePostDTO';

class CreatePostUseCase {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async exec(data: ICreatePostDTO) {
    const QueryRes = await this.postsRepository.createPost(data.post, data.user, data.date, data.customId);
    return QueryRes;
  }
}

export default CreatePostUseCase;
