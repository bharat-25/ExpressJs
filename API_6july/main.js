// import express from 'express';
// const app = express();
// app.use(json());
// import { userDetails, getUser, updateUser, deleteUser, arrayObj } from "./functions";
// const PORT = 3001;


// app.post('/addUser', userDetails);

// app.get('/user/:id/:name', getUser);

// app.patch('/updateUser/:id/:name', updateUser);

// app.delete('/deleteUser/:id', deleteUser);

// app.get('/arrayOfObjects/:id', arrayObj);

// // app.listen(3001, ()=>{
// //     console.log("Runnning at port 3001");
// // });
// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// });

// import express, {json} from "express";

const express = require('express');
const {userDetails, getUser, updateUser, deleteUser, arrayObj} = require("./functions");
const app = express();
app.use(express.json());

app.post('/addUser', userDetails);

app.get('/user/:id/:name', getUser);

app.patch('/updateUser/:id/:name', updateUser);

app.delete('/deleteUser/:id', deleteUser);

app.get('/arrayOfObjects/:id', arrayObj);

app.listen(3500, ()=>{
    console.log("port start at 3500");
});