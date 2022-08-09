const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});
client.set('visits', 1);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    console.log('Number of visits => ' + visits);
    res.send('Number of visits => ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
