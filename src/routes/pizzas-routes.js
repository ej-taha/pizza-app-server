import express from 'express';
import PizzasController from '../controllers/pizzas-controller';


export default (server) => {

   // pizzas ROUTES
   server.get(`/api/pizzas`, PizzasController.getAll);
   server.post(`/api/pizzas`, PizzasController.insert);
   server.put(`/api/pizzas/:id`, PizzasController.update);
   server.delete(`/api/pizzas/:id`, PizzasController.delete);

};