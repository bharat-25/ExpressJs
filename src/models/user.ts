import { Model, DataTypes } from 'sequelize';
import {sqlize,dbconnection} from '../database/connection';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

const UserModel = sqlize.define("chatdata", {
    id: {
         type:DataTypes.INTEGER,
         //allowNull:false,    
         primaryKey: true,
         autoIncrement:true
        },
        username: DataTypes.TEXT,
        password: DataTypes.TEXT,
       // Message:DataTypes.TEXT
      }, {
            timestamps: false
        }
);
(async ()=>{
    await UserModel.sync({alter : true});
})();

const ChatModel = sqlize.define("Messagedata", {
  id: {
    type:DataTypes.INTEGER,    
    primaryKey: true,
    autoIncrement:true
   },
  senderId: {
       type:DataTypes.INTEGER,    
      //  autoIncrement:true
      },
  receiverId: {
        type:DataTypes.INTEGER,    
        // autoIncrement:true
       },
  Contents:DataTypes.TEXT
    }, {
          timestamps: false
      }
);
(async ()=>{
  await ChatModel.sync();
})();
export {UserModel,ChatModel};