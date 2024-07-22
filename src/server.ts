import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routers from './app/routers/routes';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('combined'))

app.use(routers);

AppDataSource.initialize().then(async () => {
  console.log("Database Ok");

  app.listen(port, () => {
    console.log(`
      _________ __                 __                          ____    ___________.__  __  .__                  
     /   _____//  |_____________ _/  |_  ____   ____ ___.__.  /  _ \\   \\_   _____/|__|/  |_|  |__   ___________ 
     \\_____  \\\\   __\\_  __ \\__  \\\\   __\\/ __ \\ / ___<   |  |  >  _ </\\  |    __)_ |  \\   __\\  |  \\_/ __ \\_  __ \\
     /        \\|  |  |  | \\// __ \\|  | \\  ___// /_/  >___  | /  <_\\ \\/  |        \\|  ||  | |   Y  \\  ___/|  | \\/
    /_______  /|__|  |__|  (____  /__|  \\___  >___  // ____| \\_____\\ \\ /_______  /|__||__| |___|  /\\___  >__|   
            \\/                  \\/          \\/_____/ \\/             \\/         \\/               \\/     \\/    
    
          Server started on port ${port}`
  );
  });

});