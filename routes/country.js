var express = require('express');
var router = express.Router();
var con = require('../connection');
/* GET home page. */
router.get('/', function(req, res, next) {
  con.query('SELECT `country_name`, `country_code`, `country_id`, `regex` FROM `country` WHERE `status` = true',
  function(error,results,field){
    if(error) throw error;
    else{
        res.send(results);
    }
  })
});

module.exports = router;