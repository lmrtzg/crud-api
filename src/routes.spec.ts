/* eslint-disable jest/no-done-callback */
// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from './app';

interface IPostStructure {
  _id: string;
  post: string;
  user: string;
  date: string;
  customId: string;
  __v: number;
}

const mockPost = {
  post: 'Postagem teste',
  user: 'Usuário teste',
};

describe('Teste de Endpoint', () => {
  it('Deve criar um post e retornar status 201', (done) => {
    request(app)
      .post('/post')
      .send(mockPost)
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('post', mockPost.post);
        expect(res.body).toHaveProperty('user', mockPost.user);
        done();
      });
  });

  it('Deve falhar ao criar um post e retornar status 404', (done) => {
    request(app)
      .post('/post')
      .send()
      .then((res) => {
        expect(res.status).toBe(400);
        done();
      });
  });

  it('Deve falhar ao atualizar um post e retornar o status 404', (done) => {
    request(app)
      .post('/update')
      .send('random')
      .then((res) => {
        expect(res.status).toBe(404);
        done();
      });
  });

  it('Deve atualizar um post e retornar o status 200', (done) => {
    request(app)
      .get('/posts')
      .then((res) => {
        const { customId } = res.body[0];
        request(app)
          .post('/update')
          .send({ customId, newPost: 'Novo post' })
          .then((res2) => {
            expect(res2.status).toBe(200);
            done();
          });
      });
  });

  it('Deve receber uma array de objetos com todos posts e retornar status 200', (done) => {
    request(app)
      .get('/posts')
      .then((res) => {
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining<IPostStructure>({
          _id: expect.any(String),
          post: expect.any(String),
          user: expect.any(String),
          date: expect.any(String),
          customId: expect.any(String),
          __v: expect.any(Number),
        })]));
        expect(res.status).toBe(200);
        done();
      });
  });

  it('Deve falhar ao excluir um post e retornar o status 404', (done) => {
    request(app)
      .delete('/delete')
      .send('random')
      .then((res) => {
        expect(res.status).toBe(404);
        done();
      });
  });

  it('Deve excluir um post e retornar o status 200', (done) => {
    request(app)
      .get('/posts')
      .then((res) => {
        const { customId } = res.body[0];
        request(app)
          .delete('/delete')
          .send({ customId })
          .then((res2) => {
            expect(res2.status).toBe(200);
            done();
          });
      });
  });
});
