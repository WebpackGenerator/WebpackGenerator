// Here we will be unit testing the 3 main database functions from server/models/userModel.js
const fs = require('fs');
const path = require('path');
// const { MongoClient } = require('mongodb');
const db = require('../server/models/userModel.js');
const mongoose = require("mongoose");

// Test DB
// const MONGO_URI_TEST =
//   "mongodb+srv://abowitzn:codesmith22@cluster0.p6lizmd.mongodb.net/?retryWrites=true&w=majority";


describe('db init tests', () => {
  
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI_TEST__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // sets the name of the DB that our collections are part of
      dbName: 'w-test'
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });
  
  // afterAll(async () => {
  //   // await db.disconnect();
  //   await connection.close();
  // });


  describe('hello', () => {
    it('should insert a doc into collection', async () => {
      const users = db.collection('Users');

      const mockUser = {email: 'mock@email.com', password: '12345678'};

      await users.insertOne(mockUser);
  
      const insertedUser = await users.findOne({email: 'mock@email.com'});

      expect(insertedUser).toEqual(mockUser);
    })

  });

});

