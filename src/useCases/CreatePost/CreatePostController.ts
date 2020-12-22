import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import CreatePostUseCase from './CreatePostUseCase';

class CreatePostController {
  private createPostUseCase: CreatePostUseCase;

  constructor(createPostUseCase: CreatePostUseCase) {
    this.createPostUseCase = createPostUseCase;
  }

  async handle(req: Request, res: Response) {
    const { text, author } = req.body;
    const date = new Date();
    try {
      const QueryRes = await this.createPostUseCase.exec({
        text,
        author,
        date,
        customId: uuidv4(),
      });

      return res.status(201).json(QueryRes);
    } catch (err: any) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

export default CreatePostController;
