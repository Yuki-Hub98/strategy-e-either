import { AppDataSource } from '../../database/data-source';
import { Client } from '../entities/Client';
import { Either, erro, success } from '../helpers/either';
import { ExceptionError } from '../helpers/exceptionError';
import strategyErrorSql from '../helpers/strategyErrorSql';
import IClient from '../interfaces/IClient';
import { ILike, QueryFailedError } from 'typeorm';

const ClientRepository = AppDataSource.getRepository(Client);

type Response = Either<ExceptionError, IClient>

const errorSql = strategyErrorSql()

const getClient = (): Promise<IClient[]> => {
  return ClientRepository.find();
};

const searchClient = async (name: string):Promise<IClient[]> => {
  const filters: any = {};
  if (name !== '') {
    filters.name = ILike(`%${name}%`)
    return await ClientRepository.find({where: filters});
  }else {
    filters.message = "User not found";
    return filters;
  };
  
};

const searchClientById = async (clientId: number): Promise<IClient | undefined> => {
  const client = await ClientRepository.findOne({ where: { id: clientId } })
  if (client !== null) {
    return client
  }
  
}
const registerClient = async (client: IClient):Promise<Response> => {
  const newClient = ClientRepository.create(client);
  try {
    const clientRegistered = await ClientRepository.save(newClient);
    return success(clientRegistered)
  } catch (error) {
    if (error instanceof QueryFailedError) {
      return erro(errorSql.code(error.driverError.errno))
    }
    return erro(new ExceptionError("Problem registering user", 404))
  }
  
};

const updateClient = async (client: IClient, id: number):Promise<Response | undefined> => {
  try {
    const clientUpdated = await ClientRepository.update(id, {name: client.name, numberPhone: client.numberPhone, cnpj: client.cnpj});
    if (clientUpdated.affected) {
      return success(client)
    }
  } catch (error) {
    if (error instanceof QueryFailedError) {
      return erro(errorSql.code(error.driverError.errno))
    }
    return erro(new ExceptionError("Problem registering user", 404))
  }
};

const deleteClient = async (client: IClient, id: number): Promise<Response | undefined> => {
  try {
    const clientDeleted = await ClientRepository.delete({id: id})
    if (clientDeleted.affected) {
      return success(client)
    }
  } catch (error) {
    if (error instanceof QueryFailedError) {
      return erro(errorSql.code(error.driverError.errno))
    }
    return erro(new ExceptionError("Problem registering user", 404))
  }
  
  
}

export default {getClient, searchClientById, searchClient, registerClient, updateClient, deleteClient}





