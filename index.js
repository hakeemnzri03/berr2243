const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://127.0.0.1:27017'; // your local MongoDB
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB!');

    const db = client.db('testDB');
    const collection = db.collection('users');

    const result = await collection.insertOne({ name: "Hakeem", age: 21 });
    console.log(`Inserted document with _id: ${result.insertedId}`);

    const documents = await collection.find().toArray();
    console.log('Documents:', documents);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await client.close();
  }
}

main();
