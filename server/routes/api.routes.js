let express = require('express');
let router = express.Router();

router.route('/').get((req, res) => {
  return res.json({ api: [{ title: 'Task1' }, { title: 'Task2' }, { title: 'Task 3' }] });
});

module.exports = router;
