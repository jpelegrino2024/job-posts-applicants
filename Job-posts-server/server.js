const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

app.listen(8022, () => {
  console.log('Server has started');
});
