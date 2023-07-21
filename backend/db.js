const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://rajgohel0003:tzS0rkZM5khASD69@cluster0.ohmcsj1.mongodb.net/?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
async function connectToDB() {
    try {
      const client = await MongoClient.connect(url, options);
      const db = client.db();
      console.log('Connected to MongoDB');
      return db;
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      process.exit(1);
    }
  }
  module.exports = connectToDB;
