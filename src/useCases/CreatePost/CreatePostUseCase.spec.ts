import CreatePostUseCase from './CreatePostUseCase';
import { MockPostsRepository, mockPost } from '../../mocks/MockPostsRepository';

describe('Teste de caso de uso (Criar Post)', () => {
  const mockPostsRepository = new MockPostsRepository();
  const createPostUseCase = new CreatePostUseCase(mockPostsRepository);

  it('Caso de sucesso: deve retornar o post criado', async () => {
    const QueryRes = await createPostUseCase.exec(mockPost);
    expect(QueryRes).toEqual(mockPost);
  });
});
