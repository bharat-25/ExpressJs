const express = require('express');
const Joi = require('joi');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/user', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(8).required(),
    mobile_no: Joi.string().min(10).max(10).required(),
    Emp_ID: Joi.string().min(4).max(4).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }else{

  }
//   console.log(`name:  ${req.body.name}`);
const showdata ={
    name :req.body.name,
    email: req.body.email, 
    mobile_no:req.body.mobile_no, 
    Emp_ID: req.body.Emp_ID
    
};
res.send(`The new user created name: ${showdata.name}`);


//   res.send('New user has been created. name: ${req.body.name} ');
  

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});