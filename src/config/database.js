import mongoose from 'mongoose';
import Debug from 'debug';

class Connection {
   constructor() {
      const debug = Debug(`debug:${(this.constructor).name}`);
      const url =
         process.env.MONGODB_URI || `mongodb+srv://admin:milan2010@cluster0-u8men.mongodb.net/test?retryWrites=true&w=majority`;
      debug('Establish new connection with url', url);
      mongoose.Promise = global.Promise;
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      mongoose.set('useUnifiedTopology', true);
      mongoose.connect(url).then(() => debug('connected...'))
         .catch(error => debug(error));
   }
}

export default new Connection();