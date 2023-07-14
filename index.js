const app = require('./app');
const db = require('./config/db');

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});