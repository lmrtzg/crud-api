/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const URL: any = process.env.DB;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected :)'));

export default db;
