import mongoose from 'mongoose';

import { Service } from './service';


export default class PizzasService extends Service {
   constructor(model: mongoose.Model<mongoose.Document>) {
      super(model);
   }
}