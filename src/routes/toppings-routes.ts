import express from 'express';
import ToppingsController from '../controllers/toppings-controller';


export default (server: express.Express) => {

   // toppings ROUTES
   server.get(`/api/toppings`, ToppingsController.getAll);
};