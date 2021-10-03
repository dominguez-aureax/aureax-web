const express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.unsubscribe(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.get('/', (req, res) => {
  return res.send('hello world');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
