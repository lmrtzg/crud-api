import DeletePostUseCase from './DeletePostUseCase';
import { MockPostsRepository, mockPost } from '../../mocks/MockPostsRepository';

const { customId } = mockPost;

describe('Teste de caso de uso (Deletar Post)', () => {
  const mockPostsRepository = new MockPostsRepository();
  const deletePostUseCase = new DeletePostUseCase(mockPostsRepository);

  it('Caso de sucesso: deve retornar status 200', async () => {
    const QueryRes = await deletePostUseCase.exec({ customId });
    expect(QueryRes).toBe(200);
  });

  it('Caso de falha: deve retornar status 404', async () => {
    const QueryRes = await deletePostUseCase.exec({ customId: 'random' });
    expect(QueryRes).toBe(404);
  });
});
