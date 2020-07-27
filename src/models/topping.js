import mongoose from 'mongoose';

export const toppingSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   /*  essayNumber: {
       type: Number,
       required: true
    }, */
   /* iterations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EssayIteration',
      required: true
   }], */
});

mongoose.model('Topping', toppingSchema);