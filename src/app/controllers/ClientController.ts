import {Request, Response, Router} from 'express';
import ClientService from '../services/ClientService';
import IClient from '../interfaces/IClient';

const ClientRouter = Router();

ClientRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
  const client = await ClientService.getClient();
  return res.status(200).json(client);
});

ClientRouter.get('/searchClient/:name', async (req: Request, res: Response) => {
  const names = req.params.name;
  const client = await ClientService.searchClient(names);
  return res.status(200).json(client);
});

ClientRouter.post('/registerClient', async (req: Request, res:Response):Promise<Response> => {
  const {client}: {client: IClient} = req.body;

  const registeredClient = await ClientService.registerClient(client);
  if (registeredClient.isErro()) {
    return res.status(404).json(registeredClient.value.message)
  }
  return res.status(200).json(registeredClient.value)
  
});

ClientRouter.put('/updateClient/:id', async (req:Request, res:Response):Promise<Response> => {
  const {client}: {client: IClient} = req.body;
  const id = req.params.id;

  const updateClient = await ClientService.updateClient(client, parseInt(id))
  if (updateClient) {
    if (updateClient.isErro()) {
      return res.status(404).json(updateClient.value.message)
    }
    return res.status(200).json(updateClient.value)
  }else{
    return res.status(500).json(updateClient)
  }
  
});

ClientRouter.delete('/deleteClient/:id', async (req: Request, res:Response):Promise<Response> => {
  const {client}: {client: IClient} = req.body;
  const id = req.params.id;
  const clientDeleted = await ClientService.deleteClient(client, parseInt(id))
  if (clientDeleted) {
    if (clientDeleted.isErro()) {
      return res.status(404).json(clientDeleted.value.message)
    }
    return res.status(200).json(clientDeleted.value)
  }else{
    return res.status(500).json(clientDeleted)
  }
  
})

export default ClientRouter

