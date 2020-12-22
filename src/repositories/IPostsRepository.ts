/* eslint-disable no-unused-vars */
import { Document } from 'mongoose';

interface IPostsRepository {
  createPost(text: string, author: string, date: Date, customId: string): Promise<Document | object>;
  getPosts(): Promise<Document[] | Array<object>>;
  deletePost(customId: string): Promise<number>;
  updatePost(customId: string, newPost: string): Promise<number>;
}

export default IPostsRepository;
