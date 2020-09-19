var mysql = require("mysql");
require("dotenv").config()
var connection ="";
if(process.env.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL)
}
else{
   connection= mysql.createConnection({
        host:"localhost",
        port:3306,
        user:process.env.USERNAME,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
    })
}


connection.connect(function(error){
    if (error) throw error 
     console.log("connection Id", connection.threadId)
});


module.exports = connection;