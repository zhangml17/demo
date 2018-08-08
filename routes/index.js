var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('select',{});
});

router.post('/',function(req,res){
  res.render('show',{'Commond':req.body['commond']});
});

router.get('/sysinput',function(req,res){
  res.render('sysinput',{});
});

router.post('/sysinput',function(req,res){
  var cmdStr = req.body['syscomd'];
  exec(cmdStr,function(err,stdout,srderr){
    if(err){
      console.log(srderr);
    }else{
      console.log(stdout);
    }
  });  
});
module.exports = router;
