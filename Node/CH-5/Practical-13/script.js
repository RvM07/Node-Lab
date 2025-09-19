const express = require('express');
const app = express();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vedika14',
    database:'Customer'
});

// con.query('SELECT * FROM Customers',(err,result)=>{
//     if (err) throw err;
//     console.log(result);
// });

con.connect((err)=>{
    if(err) throw err;
    console.log('Connected to database');
});

app.get('/',(req,res)=>{
    res.send('Welcome to the Node,Express app with MySQL..!!');
});


app.get('/customers',(req,res)=>{
    con.query('SELECT * FROM Customers',(err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        };
        res.json(result);
    });
});

app.listen(3000,()=>{
    console.log('Server started on port 3000');
});