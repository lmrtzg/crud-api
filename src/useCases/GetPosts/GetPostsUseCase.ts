import IPostsRepository from '../../repositories/IPostsRepository';

class GetPostsUseCase {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async exec() {
    const postsArray = await this.postsRepository.getPosts();
    return postsArray;
  }
}

export default GetPostsUseCase;
