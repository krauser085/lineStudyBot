let _tag = '[router/index.js]'
let express = require('express');
let router = express.Router();

router.post('/', function(req, res, next) {
  console.log(_tag + 'headers', JSON.stringify(req.headers))
  console.log(_tag + 'body', JSON.stringify(req.body))
  res.send(200, '[post/] hello world')
});

module.exports = router;
