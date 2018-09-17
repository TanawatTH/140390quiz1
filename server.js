var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 'db140390',
  password : 's140390',
  database : 'my_db'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})