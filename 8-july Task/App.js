// const express = require('express');
// const {register,loginuser,getdetail,update,deletedetails} = require("./new2");
// const app = express();
// app.use(express.json());

// app.post('/Users', register);

// app.post('/users', loginuser);

// app.get('/Users'|| '/users/:id', getdetail);

// app.put('/Users/:id', update);

// app.delete('/users/:id', deletedetails);


// app.listen(4008, () => {
//     console.log('Server started on port 4000');
//   });


const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const getUserList =()=>{
    let userList = fs.readFileSync('users.json',{ encoding: 'utf8' })    

    if(!userList){
        return [];
    }
    return JSON.parse(userList);
}

function writeDataFile(users) {
    const json = JSON.stringify(users, null, 2);
    fs.writeFileSync('users.json', json, 'utf8');
  }

// GET /users
app.get('/users', (req, res) => {
  let users = getUserList();
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  let users = getUserList();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json(user);
});

// POST /users
app.post('/users', (req, res) => {
  let users = getUserList();
  const { email, password, firstName, lastName, gender, dob }= req.body;

  if (!firstName|| !lastName || !gender || !dob || !password || !email) {
    return res.status(400).json({ error: 'Enter all details' });
  }

  const newUser = { id: users.length + 1, email, password, firstName, lastName, gender, dob};
  users.push(newUser);

  writeDataFile(users);

  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dob } = req.body;
  let users = getUserList();
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

  writeDataFile(users);
  res.status(200).json(user);
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  let users = getUserList();
  const index = users.findIndex((u) => u.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(index, 1)[0];
  writeDataFile(users);

  res.status(200).json(deletedUser);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});

