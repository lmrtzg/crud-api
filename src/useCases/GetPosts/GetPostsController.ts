import { Response } from 'express';
import GetPostsUseCase from './GetPostsUseCase';

class GetPostsController {
  private getPostsUseCase: GetPostsUseCase;

  constructor(getPostsUseCase: GetPostsUseCase) {
    this.getPostsUseCase = getPostsUseCase;
  }

  async handle(_: any, res: Response) {
    try {
      const postsArray = await this.getPostsUseCase.exec();
      return res.status(200).json(postsArray);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

export default GetPostsController;
