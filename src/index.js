require('./models/topping');
require('./models/pizza');
require('./config/database');
require('./services/service');
const server = require('./config/server');
// import server from './config/server';

const PORT = process.env.PORT || 8081;

// start the Express server
server.listen(PORT, () => {
   console.log(`server started at http://localhost:${PORT}`);
});