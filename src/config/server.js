import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import * as dotenv from 'dotenv';

import toppings from '../routes/toppings-routes';
import pizzas from '../routes/pizzas-routes';

dotenv.config();
const server = express();

// enhance your app security with Helmet
server.use(helmet());

server.use(bodyParser.urlencoded({
   extended: true
}));

// use bodyParser to parse application/json content-type
server.use(bodyParser.json());

// enable all CORS requests
server.use(cors());

// log HTTP requests
server.use(morgan('combined'));

// ESSAY routes
pizzas(server);
// ESSAY ITERATION routes
toppings(server);

export default server;