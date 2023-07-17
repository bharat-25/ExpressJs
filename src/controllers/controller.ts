import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {UserModel,ChatModel} from '../models/user';
//import ChatModel from '../models/user';
import { any } from 'joi';


// ---------------------------------------------USER SIGNUP----------------------------------------------------------------

export const signup = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const user = await UserModel.create(data);
    console.log(user);
    
    const token = jwt.sign({ data}, 'secret');

    res.send(`Signup Complete and Token:${token}`);
  } catch (error) {
    console.error('Failed to create user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

//-------------------------------------------------LOGIN--------------------------------------------------------------

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user: any = await UserModel.findOne({ where: { username, password } });

    

    console.log(user,"-----------------------EUS----------------------------------------------");

    if (!user) {
      return res.status(404).send('User not found');
    }

    const token = jwt.sign({ userId: user.id }, 'secret');
    res.send({ token });
  } 
  catch (error) {
    console.error('Failed to login:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
};

//-----------------------------------------------------CREATE CHAT--------------------------------------------------------

export const createChat = async (req: Request, res: Response) => {
  const { senderId, receiverId,Text} = req.body;
  const token = req.headers.authorization?.split(' ')[1];

    console.log(token,"--------------------------------TOEKEN--------------------------");
    
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify and decode the user token
    const decodedToken = jwt.verify(token, 'secret') as { data: { id: string } };
    const id = decodedToken.data;
    // const id=senderId

    // Check if the sender exists
    const sender = await UserModel.findByPk(senderId);
    if (!sender) {
      return res.status(404).json({ error: 'Sender not found' });
    }

    // Check if the recipient exists
    const receiver = await UserModel.findByPk(receiverId);
    if (!receiver) {
      return res.status(404).json({ error: 'Recipient not found' });
    }

    // Create a new chat
    const chat = await ChatModel.create({ senderId, receiverId ,Text});
    const chatId = id;


    res.json({chat});
  } catch (error) {
    console.error(error);
    console.error('Failed to create chat:', error);
    res.status(500).json({ error: 'Failed to create chat' });
  }
};

//---------------------------------------------------SEND MESSAGE-------------------------------------------------------

export const Message = async (req: Request, res: Response) => {
  const { senderId, receiverId, Contents } = req.body;
   console.log(senderId,receiverId);
  try {
    const sender = await UserModel.findOne({where:{id:senderId}});
    const receiver = await UserModel.findOne({where:{id:receiverId}});
    console.log(receiver);
    if (!sender && !receiver) {
      return res.status(404).json({ message: 'One or both users not found.' });
    }

    const newMessage = await ChatModel.create({
      senderId,
      receiverId,
      Contents,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
};

//----------------------------------------------------GET ALL MESSAGE-----------------------------------------------------

export const getallmessage= async (req: Request, res: Response) => {
  try {
    const messages = await ChatModel.findAll();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the messages.' });
  }
};


// ---------------------------------------------delete all messages---------------------------------------------
export const deleteallmessage =async (req: Request, res: Response) => {
  try {
    await ChatModel.destroy({ truncate: true });

    res.status(200).json({ message: 'All messages deleted successfully.' });
  } catch (error) {
    console.error('Error deleting messages:', error);
    res.status(500).json({ error: 'An error occurred while deleting messages.' });
  }
};
