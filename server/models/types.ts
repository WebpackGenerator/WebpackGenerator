// this file has global variables for DBs
import { MongoMemoryReplSet, MongoMemoryServer } from 'mongodb-memory-server';

declare global {
  const __MONGO_URI_PROD__: 'mongodb+srv://webpackmystack:lipfish@cluster0.mqfyalr.mongodb.net/?retryWrites=true&w=majority';
  const __MONGO_URI_TEST__: 'mongodb+srv://abowitzn:codesmith22@cluster0.p6lizmd.mongodb.net/?retryWrites=true&w=majority';
}

export type Mongo = (MongoMemoryReplSet | MongoMemoryServer) & {isRunning: boolean}
