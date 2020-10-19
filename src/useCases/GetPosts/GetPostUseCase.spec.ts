import GetPostsUseCase from './GetPostsUseCase';
import { MockPostsRepository, mockPost } from '../../mocks/MockPostsRepository';

describe('Teste de caso de uso (Receber Posts)', () => {
  const mockPostsRepository = new MockPostsRepository();
  const getPostsUseCase = new GetPostsUseCase(mockPostsRepository);

  it('Caso de sucesso: deve retornar uma array de posts', async () => {
    const QueryRes = await getPostsUseCase.exec();
    expect(QueryRes).toEqual([mockPost]);
  });
});
