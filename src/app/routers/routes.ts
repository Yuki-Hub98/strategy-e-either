import { Router } from 'express';
import ClientRouter from '../controllers/ClientController';

const routers = Router();

routers.use('/client', ClientRouter);


export default routers;

