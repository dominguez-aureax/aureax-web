const express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

let apiRoute = require('./routes/api.routes');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/api', apiRoute);

app.get('/', (req, res) => {
  return res.send('hello world');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
