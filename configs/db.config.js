const mongoose = require('mongoose');

const DbConnection = async () => {
  try {
    const connection = await mongoose
      .connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log(`Connected to Mongo! Database name: "${connection.connections[0].name}"`)
    return true
  } catch (error) {
    console.error('Error connecting to mongo', error)
    return false
  }

}

module.exports = DbConnection

