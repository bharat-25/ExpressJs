import { Sequelize } from 'sequelize';

const sqlize = new Sequelize('postgres', 'postgres', '      ', {
  host: 'localhost',
  dialect: 'postgres',
});

const dbconnection = async ()=>{
    try{
    const msgonconnect =  await sqlize.authenticate();
     console.log('Connection has been established successfully.');
   }
  catch(err){
    console.error('Unable to connect to the database:', err);
   }
}

export {sqlize,dbconnection};