/* eslint-disable class-methods-use-this */
import { Document } from 'mongoose';
import IPostsRepository from '../../IPostsRepository';
import PostModel from './MongoosePostModel';

class MongoosePostRepository implements IPostsRepository {
  async createPost(post: string, user: string, date: Date, customId: string) {
    try {
      const QueryRes = await PostModel.create({
        post,
        user,
        date,
        customId,
      });
      return QueryRes;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getPosts() {
    try {
      const posts: Document[] = await PostModel.find({});
      return posts;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async deletePost(customId: string) {
    try {
      const QueryRes = await PostModel.deleteOne({ customId });
      if (QueryRes.deletedCount === 1) {
        return 200;
      }
      return 404;
    } catch (err) {
      throw new Error(err);
    }
  }

  async updatePost(customId: string, newPost: string) {
    const query = { customId };
    try {
      const request = await PostModel.findOneAndUpdate(query, { post: newPost });
      if (request != null) {
        return 200;
      }
      return 404;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default MongoosePostRepository;
