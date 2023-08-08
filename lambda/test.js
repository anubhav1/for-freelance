var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "db-instance-identifier.cht3qw2hlkr0.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Lumia640!",
    database: "databasename",
});

export const handler = async (event) => {

  connection.query('show tables', function (error, results, fields) {
    if (error) {
        connection.destroy();
        throw error;
    } else {
        // connected!
        console.log(results);
        callback(error, results);
        connection.end(function (err) { callback(err, results);});
    }
}); 
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from github!!'),
  };
  return response;
};
