var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

exports.handler = async (event) => {
  try {
    const data = await new Promise((resolve, reject) => {
      connection.connect(function (err) {
        if (err) {
          reject(err);
        }
        connection.query('SELECT message FROM MESSAGE', function (err, result) {
          if (err) {
            console.log("Error->" + err);
            reject(err);
          }
          console.log("result->" + result[0].message);
          resolve(result);
        });
        
      })
    });


    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }


  } catch (err) {
    return {
      statusCode: 400,
      body: err.message
    }
  }
};
