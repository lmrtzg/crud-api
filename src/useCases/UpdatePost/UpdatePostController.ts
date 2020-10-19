import { Request, Response } from 'express';
import UpdatePostUseCase from './UpdatePostUseCase';

class UpdatePostController {
  private updatePostUseCase: UpdatePostUseCase

  constructor(updatePostUseCase: UpdatePostUseCase) {
    this.updatePostUseCase = updatePostUseCase;
  }

  async handle(req: Request, res: Response) {
    try {
      const { customId, newPost } = req.body;
      const QueryResCode = await this.updatePostUseCase.exec({ customId, newPost });
      return res.sendStatus(QueryResCode);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

export default UpdatePostController;
