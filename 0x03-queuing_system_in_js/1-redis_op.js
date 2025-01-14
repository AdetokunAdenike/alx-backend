import { createClient, print } from 'redis';

console.log('Starting Redis client script...');

// Configure Redis client explicitly
const client = createClient({
  socket: {
    host: '127.0.0.1',
    port: 6379,
  },
});

console.log('Redis client created, attempting connection...');

// Connect and handle connection events
client.connect().then(() => {
  console.log('Redis client connected to the server');

  // Perform Redis operations
  displaySchoolValue('ALX');
  setNewSchool('ALXSanFrancisco', '100');
  displaySchoolValue('ALXSanFrancisco');

  setTimeout(() => {
    client.quit();
    console.log('Redis client connection closed');
  }, 1000);
}).catch((err) => {
  console.error('Redis connection error:', err.message);
});

// Function to set a new school in Redis
function setNewSchool(schoolName, value) {
  console.log(`Setting key "${schoolName}" with value "${value}"`);
  client.set(schoolName, value, print);
}

// Function to display the value of a school from Redis
function displaySchoolValue(schoolName) {
  console.log(`Fetching value for key: "${schoolName}"`);
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error fetching value for "${schoolName}": ${err.message}`);
    } else {
      console.log(`Value for "${schoolName}": ${reply}`);
    }
  });
}
