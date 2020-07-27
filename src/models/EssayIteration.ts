import mongoose from 'mongoose';


const essayIterationSchema = new mongoose.Schema({
   essayId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Essay',
      required: false
   },
   submissionDate: {
      type: Date,
      required: false
   },
   iteration: {
      type: Number,
      required: true
   },
   isCorrection: {
      type: Boolean,
      required: true
   },
   correction: this,
   content: {
      type: String,
      required: true
   }
});

mongoose.model('EssayIteration', essayIterationSchema);

/* export interface EssayIteration extends mongoose.Document {
   essayId: Essay['_id'];
   submissionDate: Date;
   iteration: Number;
   isCorrection: Boolean;
   correction: EssayIteration;
   text: string;
} */