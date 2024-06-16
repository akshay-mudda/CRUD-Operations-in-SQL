const redis = require('redis');

// Redis connection
const client = redis.createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Redis client error', err);
});

(async () => {
  await client.connect();

  // Insert operation (using HMSET for a hash)
  await client.hSet('document_key', {
    Column1: Value1,
    Column2: Value2,
    Column3: Value3,
    // Add more fields as needed
  });
  console.log('Document inserted');

  // Select operation (using HGETALL to get the entire hash)
  const document = await client.hGetAll('document_key');
  console.log('Selected document:', document);

  // Update operation (using HMSET to update the hash)
  await client.hSet('document_key', {
    Column2: UpdatedValue2,
    Column3: UpdatedValue3,
    // Update more fields as needed
  });
  console.log('Document updated');

  // Select operation to verify update
  const updatedDocument = await client.hGetAll('document_key');
  console.log('Updated document:', updatedDocument);

  // Delete operation (using DEL to remove the key)
  await client.del('document_key');
  console.log('Document deleted');

  // Close the connection
  await client.disconnect();
})();
