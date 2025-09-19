const mysql = require('mysql2');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vedika14',
    database:'Customer'
});

con.query('SELECT * FROM Customers',(err,result)=>{
    if (err) throw err;
    console.log(result);
});