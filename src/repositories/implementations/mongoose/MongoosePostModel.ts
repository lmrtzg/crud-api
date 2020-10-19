import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  post: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, required: true },
  customId: { type: String, required: true },
});

const PostModel = model('PostModel', postSchema);

export default PostModel;
