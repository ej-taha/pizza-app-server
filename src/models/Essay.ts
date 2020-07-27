import mongoose from 'mongoose';

const essaySchema = new mongoose.Schema({
   userId: {
      type: String,
      ref: 'User',
      required: true
   },
   active: {
      type: Boolean,
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

mongoose.model('Essay', essaySchema);

/* export interface Essay extends mongoose.Document {
   userId: string;
   active: Boolean;
   essayNumber: Number;
   iterations: EssayIteration['_id'][];
} */