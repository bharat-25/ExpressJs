const express = require('express');
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: 'xyz', email: 'xyz@example.com' },
  { id: 2, name: 'abc', email: 'abc@example.com' }
];

const getUserList =()=>{
    let userList = fs.readFileSync('users.json',{ encoding: 'utf8' })    
    return userList;
}

function writeDataFile(Users) {
    const json = JSON.stringify(users, null, 2);
    fs.writeFileSync(users, json, 'utf8');
  }

// GET /users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
});

// POST /users
app.post('/users', (req, res) => {
  const { email, password, firstName, lastName, gender, dob }= req.body;

  if (!firstName|| !lastName || !gender || !dob || !password || !email) {
    return res.status(400).json({ error: 'Enter all details' });
  }

  const newUser = { id: users.length + 1, email, password, firstName, lastName, gender, dob};
  users.push(newUser);

  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dob } = req.body;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (!firstName|| !lastName || !dob) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.dob=dob; 

  res.status(200).json(user);
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(index, 1)[0];

  res.status(200).json(deletedUser);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});


