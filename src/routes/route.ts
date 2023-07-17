import express from 'express';
import { signup, login, createChat,Message,getallmessage,deleteallmessage} from '../controllers/controller';

const router = express.Router();


router.get('/');
router.post('/signup', signup);
router.post('/login', login);
router.post('/chats', createChat);
router.post('/message',Message);
router.post('/allmessage',getallmessage)
router.delete('/delete',deleteallmessage)

export default router;