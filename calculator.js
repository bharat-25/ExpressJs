
const express = require('express');
const app = express();
app.use(express.json());

// SUM
app.post('/calculator/sum', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

//SUBTRACT
app.post('/calculator/subtract', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = num1 - num2;
  res.send(`The difference between ${num1} and ${num2} is ${result}`);
});

// MULTYPLY
app.post('/calculator/multiply', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = num1 * num2;
  res.send(`The product of ${num1} and ${num2} is ${result}`);
});

//DIVIDE
app.post('/calculator/divide', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = num1 / num2;
  res.send(`The quotient of ${num1} and ${num2} is ${result}`);
});

//SQRT
app.post('/calculator/sqrt', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = Math.sqrt(num1);
  const result1 = Math.sqrt(num2);
  res.send(`The Sqrt of ${num1} is ${result} and ${num2} is ${result1}`);
});

//POW
app.post('/calculator/pow', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = Math.pow(num1 , num2);
  res.send(`The power of ${num1} is ${num2} and result is ${result}`);
});

//LOG
app.post('/calculator/log', (req, res) => {
  const num1 = (req.body.num1);
  const num2 = (req.body.num2);
  const result = Math.log(num1);
  const result1 = Math.log(num2);
  res.send(`The log of ${num1} is ${result} and ${num2} is ${result1}`);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
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