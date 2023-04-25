import { MongoClient, Db } from 'mongodb';

export class Database {
  private static mongoClient: MongoClient;

  private constructor() {}

  static async initilize() {
    this.mongoClient = await MongoClient.connect(
      'mongodb+srv://keyingsong123:EpDgcmwJMROz9mJN@cluster0.a5gedgy.mongodb.net/test'
    );
  }

  static getDb() {
    return this.mongoClient.db();
  }
}
