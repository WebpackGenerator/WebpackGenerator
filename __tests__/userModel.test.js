const Users = require("../server/models/userModel.js");
// Fake user data for the sake of testing in the in-memory database.
const userData = { email: "simon8@gmail.com", password: "12321321" };
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
// const {Db} = require('mongodb')

let mongoServer;

// before all tests connect to the test DB created in RAM
beforeEach(async () => {
   // Create a new mongodb-memory-server instance that will run all the operations from RAM.
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.createConnection(uri, mongooseOpts);
});

// after all tests disconnect from the test DB
afterEach(async () => {
  // await mongoose.connection.mongoServer.dropDatabase();
  // await mongoose.connection.close();
  await mongoServer.stop();
});

// // Testing for the User Model.
describe("User Model Test", () => {

  it("create & save user successfully", async () => {
    // Link the new fake user object to the MongoDB schema.
    const validUser = new Users({ email: "simon28@gmail.com", password: "12321321" });
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(validUser.email);
    expect(savedUser.password).toBe(validUser.password);
  });

  it("return error when email or password are not a string", async () => {
    // Link the new fake user object to the MongoDB schema.
    const validUser = new Users({ email: "simon29@gmail.com", password: "12321321" });
    const savedUser = await validUser.save();

    expect(typeof savedUser.email).toBe('string');
    expect(typeof savedUser.password).toBe('string');
  });
});