
const express = require('express');
const {sum,subtract,multiply,divide,sqrt,pow,log} = require("./Operators");
const app = express();
app.use(express.json());

// SUMs
app.post('/sum', (req, res) => {
  // const num1 = (req.body.num1);
  // const num2 = (req.body.num2);
  // const result = num1 + num2;
  // res.send(`The sum of ${num1} and ${num2} is ${result}`);

  let result = sum(req.body.num1,req.body.num2);
  res.status(200).send(`The sum of ${req.body.num1} and ${req.body.num2} is : ${result}`);
  res.status(400).send("Invalid Error");

});

//SUBTRACT
app.post('/subtract', (req, res) => {
  // const num1 = (req.body.num1);
  // const num2 = (req.body.num2);
  // const result = num1 - num2;

  let result = subtract(req.body.num1,req.body.num2);
  res.send(`The difference between ${req.body.num1} and ${req.body.num2} is ${result}`);
});

// MULTYPLY
app.post('/multiply', (req, res) => {
  // const num1 = (req.body.num1);
  // const num2 = (req.body.num2);
  // const result = num1 * num2;

  let result = multiply(req.body.num1,req.body.num2);
  res.send(`The product of ${req.body.num1} and ${req.body.num2} is ${result}`);
});

//DIVIDE
app.post('/divide', (req, res) => {
  // const num1 = (req.body.num1);
  // const num2 = (req.body.num2);
  // const result = num1 / num2;

  let result = divide(req.body.num1,req.body.num2);
  res.send(`The quotient of ${req.body.num1} and ${req.body.num2} is ${result}`);
});

//SQRT
app.post('/sqrt', (req, res) => {
  // const num1 = (req.body.num1);
  // const result = Math.sqrt(num1);

  let result = sqrt(req.body.num1);
  res.send(`The Sqrt of ${req.body.num1} is ${result}`);
});

//POW
app.post('/pow', (req, res) => {
  // const num1 = (req.body.num1);
  // const num2 = (req.body.num2);
  // const result = Math.pow(num1 , num2);

  let result = pow(req.body.num1,req.body.num2);
  res.send(`The power of ${req.body.num1} is ${req.body.num2} and result is ${result}`);
});

//LOG
app.post('/log', (req, res) => {
  // const num1 = (req.body.num1);
  // const result = Math.log(num1);

  let result = log(req.body.num1);
  res.send(`The log of ${req.body.num1} is ${result}`);
});

app.listen(6060, () => {
  console.log('Server started on port 6060');
});



// const express = require('express');
// const app = express();

// app.get('/calculator/sum/:num1/:num2', (req, res) => {
//   const num1 = parseInt(req.params.num1);
//   const num2 = parseInt(req.params.num2);
//   const result = num1 + num2;
//   res.send(`The sum of ${num1} and ${num2} is ${result}`);
// });

// app.use(express.static('public'));

// app.listen(3003, () => {
//   console.log('Server started on port 3000');
// });