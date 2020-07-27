import mongoose from 'mongoose';

export const toppingSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   }
});

mongoose.model('Topping', toppingSchema);