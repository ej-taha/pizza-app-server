import mongoose from 'mongoose';

import ToppingsService from '../services/toppings-service';
import Controller from './controller';

const toppingsService = new ToppingsService(mongoose.model('Topping'));

class ToppingsController extends Controller {

   constructor(service: ToppingsService) {
      super(service);
   }

}

export default new ToppingsController(toppingsService);