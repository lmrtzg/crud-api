import UpdatePostUseCase from './UpdatePostUseCase';
import { MockPostsRepository, mockPost } from '../../mocks/MockPostsRepository';

const { customId } = mockPost;

describe('Teste de caso de uso (Atualizar Post)', () => {
  const mockPostsRepository = new MockPostsRepository();
  const updatePostUseCase = new UpdatePostUseCase(mockPostsRepository);

  it('Caso de sucesso: deve retornar status 200', async () => {
    const QueryRes = await updatePostUseCase.exec({ customId, newText: 'Random' });
    expect(QueryRes).toBe(200);
  });

  it('Caso de falha: deve retornar status 404', async () => {
    const QueryRes = await updatePostUseCase.exec({ customId: 'random', newText: 'Random' });
    expect(QueryRes).toBe(404);
  });
});
