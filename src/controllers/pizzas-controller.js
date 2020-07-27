import mongoose from 'mongoose';

import PizzasService from '../services/pizzas-service';
import Controller from './controller';

const pizzasService = new PizzasService(mongoose.model('Pizza'));

class PizzasController extends Controller {

   constructor(service: PizzasService) {
      super(service);
   }

}

export default new PizzasController(pizzasService);