import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  customId: { type: String, required: true },
});

const PostModel = model('PostModel', postSchema);

export default PostModel;
