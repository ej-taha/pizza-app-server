import mongoose from 'mongoose';

import Service from './Service';


export default class ToppingsService extends Service {
   constructor(model: mongoose.Model<mongoose.Document>) {
      super(model);
   }
}