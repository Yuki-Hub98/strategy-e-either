import "reflect-metadata"
import { DataSource } from "typeorm"
import { Client1719945043502 } from "./migrations/1719945043502-client"
import { Client } from "../app/entities/Client"

import 'dotenv/config';

export const AppDataSource = new DataSource({
		type: "mysql",
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		synchronize: true,
		logging: false,
		entities: [Client],
		migrations: [Client1719945043502],
		subscribers: [],
})
