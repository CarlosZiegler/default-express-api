const mongoose = require('mongoose');

const DbConnection = async () => {
  try {
    // create a connection to MongoDB
    const connection = await mongoose
      .connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    // log the connection into console
    console.log(`Connected to Mongo! Database name: "${connection.connections[0].name}"`)
    // for tests, if connection is established, return true
    return true
  } catch (error) {
    console.error('Error connecting to mongo', error)
    // for tests, if connection is failed, return false
    return false
  }

}

module.exports = DbConnection

