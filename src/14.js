import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
  // Save user to database
  res.send('User saved!');
});

app.put('/user/:id', (req, res) => {
  // Update user in database
  res.send('User updated!');
});

app.delete('/user/:id', (req, res) => {
  // Delete user from database
  res.send('User deleted!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});