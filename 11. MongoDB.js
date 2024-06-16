// MongoDB connection
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'mydatabase'; // Your database name

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        
        // Create collection syntax
        const collection = db.collection('TableName');

        // Insert operation
        await collection.insertOne({
            Column1: Value1,
            Column2: Value2,
            Column3: Value3,
            // Add more fields as needed
        });
        console.log('Document inserted');

        // Select operation
        const result = await collection.find({ /* Condition */ }).toArray();
        console.log('Selected documents:', result);

        // Update operation
        await collection.updateOne(
            { /* Condition */ },
            { $set: { /* Updated fields */ } }
        );
        console.log('Document updated');

        // Delete operation
        await collection.deleteOne({ /* Condition */ });
        console.log('Document deleted');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('Connection closed');
    }
}

// Call function to perform CRUD operations
connectToMongoDB();
