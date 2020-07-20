require('dotenv').config();
const mongoose = require('mongoose');
const DbConnection = require('../configs/db.config');

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV };

});

afterAll(() => {
  process.env = OLD_ENV;
});


describe('Testing DB', () => {
  test('Connecting to Db and returning connection true', async () => {
    const connection = await DbConnection()
    expect(connection).toBe(true);
  });
  test('Connecting to Db and returning connection False', async () => {
    process.env.MONGO_URI = 'http://wrongurl.com';
    const connection = await DbConnection()
    expect(connection).toBe(false);
  });
  test('Connecting to Db and returning connection true', async () => {
    const connection = await DbConnection()
    expect(connection).toBe(true);
  });


});
afterAll(async () => {
  await mongoose.connection.close();
});