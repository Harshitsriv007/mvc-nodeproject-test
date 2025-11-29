import mongoose from "mongoose";

const MONGO_TEST_URI = "mongodb://127.0.0.1:27017/mvc-test";

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_TEST_URI);
    console.log("MongoDB test connected");
  }
});

afterEach(async () => {
  // Clear all collections after each test
  const collections = Object.values(mongoose.connection.collections);
  for (const collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.disconnect();
});
