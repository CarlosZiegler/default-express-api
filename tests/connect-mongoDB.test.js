require('dotenv').config();
const mongoose = require('mongoose');
const DbConnection = require('../configs/db.config');

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV };

});

describe('Testing DB', () => {
  test('Connecting to Db', async () => {
    const connection = await DbConnection()
    expect(connection).toBe(true);
  });
  test('Try to connect into Db with wrong URI String', async () => {
    process.env.MONGO_URI = 'http://wrongurl.com';
    const connection = await DbConnection()
    expect(connection).toBe(false);
  });

});
afterAll(async () => {
  process.env = OLD_ENV;
  await mongoose.connection.close();
});