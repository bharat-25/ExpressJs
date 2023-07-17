import express from 'express';
import Routes from '../CHATAPI/src/routes/route';
import {sqlize,dbconnection} from './src/database/connection';

const app = express();

app.use(express.json());

app.use('/', Routes);
dbconnection();
app.listen(3000, () => {
  console.log('Server started on port 3000');
});