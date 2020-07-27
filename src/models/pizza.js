import mongoose from 'mongoose';
import { toppingSchema } from './topping';

const pizzaSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   toppings: [toppingSchema],
});

mongoose.model('Pizza', pizzaSchema);