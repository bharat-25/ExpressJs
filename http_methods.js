
const express = require('express');
const app = express();
app.use(express.json());

// Mock data for testing
const users = [
  { id: 1, name: 'Bharat', email: 'abc@gmail.com' },
  { id: 2, name: 'Tushar', email: 'xyz@gmail.com' }
];

// GET /users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Validating request body
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Updating user details
  user.name = name;
  user.email = email;

  res.status(200).json(user);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === parseInt(id));

  // Handling not found scenario with status 404
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(index, 1)[0];

  res.status(200).json(deletedUser);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});