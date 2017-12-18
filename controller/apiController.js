
var unixtimestamp = require('unix-timestamp');
var db = require('../database/db');

/*
 * GET /object/:key or /object/mykey1?timestamp=1513615396.282
 * to retrieve a latest value
 */
exports.apiValueGET = function(req, res) {

  var apikey = req.params.key;
  var mytimestamp = req.query.timestamp;
  var sqlparas = [];
  var sql = "";

  if(mytimestamp){
    sql = 'SELECT * FROM api WHERE `key` = ? and `timestamp` <= ? ORDER BY timestamp desc LIMIT 1';
    sqlparas=[apikey,mytimestamp];
  }else{
    sql = 'SELECT * FROM api WHERE `key` = ? ORDER BY timestamp desc LIMIT 1';
    sqlparas=[apikey];
  }

  db.query(sql,sqlparas, function(error, rows) {

      if(rows.length<1){
        res.json("no records found");
      }

      if(!error && rows.length>0) {
          res.json({value: rows[0].value});
      }

      if(error){
          console.log(error);
          res.json(error);
      }
  });
};


/*
 * POST /object save a new key and value
 */
exports.apiPOST =  function(req, res) {

  var apikey = req.body.key;
  var value = req.body.value;
  var mytimestamp = unixtimestamp.now();
  var data  = {key: apikey, value: value, timestamp: mytimestamp};

  db.query('INSERT INTO api SET ?', data, function(error, result) {
      if (error) throw error;
      if(!error) {
        res.json(data);
      }
  });

};
