import { Request, Response } from 'express';
import DeletePostUseCase from './DeletePostUseCase';

class DeletePostController {
  private deletePostUseCase: DeletePostUseCase

  constructor(deletePostUseCase: DeletePostUseCase) {
    this.deletePostUseCase = deletePostUseCase;
  }

  async handle(req: Request, res: Response) {
    try {
      const customId = req.body;
      const QueryResCode = await this.deletePostUseCase.exec(customId);
      return res.sendStatus(QueryResCode);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

export default DeletePostController;
