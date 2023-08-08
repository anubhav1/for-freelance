var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "db-instance-identifier-snapshot.cht3qw2hlkr0.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Lumia640!",
    database: "databasename",
});

exports.handler = async (event) => {
  const sql = "CREATE TABLE MESSAGE (message VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  const sql2 = "INSERT INTO MESSAGE (message) VALUES (I am groot)";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  const sql3 = "SELECT message FROM MESSAGE";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  return "Success"
};

