const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/public/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});


app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
