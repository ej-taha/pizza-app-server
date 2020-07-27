import express from 'express';
import ToppingsController from '../controllers/toppings-controller';


export default (server) => {

   // toppings ROUTES
   server.get(`/api/toppings`, ToppingsController.getAll);
};