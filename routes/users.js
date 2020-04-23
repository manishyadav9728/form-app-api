var express = require('express');
var router = express.Router();
var con = require('../connection');



/* GET users listing. */
router.get('/', function(req, res, next) {
  con.query('SELECT * FROM `users`',function(error,results,fields){
    if(error) throw error;
    res.send(JSON.stringify({"status":200, "error": null, "response": results}));
  });
});
router.post('/signUp', function(req, res, next){
   console.log(req.body);
  // console.log(req.body.first_name);
  con.query('INSERT INTO `users` (`first_name`, `last_name`, `emai`, `password`, `phone`, `id`, `country_id`) VALUES'+
  ' ('+"'"+req.body.first_name+"'"+','+
  "'"+req.body.last_name+"'"+',' +
  "'"+req.body.email+"'"+',' + 
  "'"+req.body.password+"'"+','+ 
  "'"+req.body.phone+"'"+','+ 
  'NULL,'+
  "'"+req.body.country+"'"+');',function(error,results){
    if(error){
      console.log(error.code);
      if(error.code === "ER_DUP_ENTRY"){
        res.send(JSON.stringify({"status":409, "message": "Duplicate Email"}))
      }
    }
    else  console.log(results);
    res.send(JSON.stringify({"status":201, "message": "success"}))
  });
  // res.send(JSON.stringify({"status":200, "error": null}));
})

module.exports = router;
