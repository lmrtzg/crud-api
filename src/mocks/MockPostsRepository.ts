/* eslint-disable class-methods-use-this */
import IPostsRepository from '../repositories/IPostsRepository';

const mockPost = {
  text: 'Postagem teste',
  author: 'Usuário teste',
  date: new Date(),
  customId: '123123teste',
};

class MockPostsRepository implements IPostsRepository {
  async createPost(text: string, author: string, date: Date, customId: string) {
    return new Promise<object>((resolve) => {
      const obj = {
        text,
        author,
        date,
        customId,
      };
      resolve(obj);
    });
  }

  async deletePost(customId: string) {
    return new Promise<number>((resolve) => {
      if (customId === mockPost.customId) {
        resolve(200);
      } else {
        resolve(404);
      }
    });
  }

  async getPosts() {
    return new Promise<Array<object>>((resolve) => {
      resolve([mockPost]);
    });
  }

  // eslint-disable-next-line no-unused-vars
  async updatePost(customId:string, newPost: string) {
    return new Promise<number>((resolve) => {
      if (customId === mockPost.customId) {
        resolve(200);
      } else {
        resolve(404);
      }
    });
  }
}

export { MockPostsRepository, mockPost };
