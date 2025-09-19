const express = require('express');
const app = express();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vedika14',
    database:'Customer'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('Connected to database');
});

con.query('SELECT * FROM Customers',(err,result)=>{
    if (err) throw err;
    console.log(result);
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

app.get('/insert',(req,res)=>{
    con.query(`INSERT INTO Customers VALUES('Priyanshu','Pune')`,(err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        };
        console.log('1 row inserted')
        res.json(result);
    });
});

app.get('/delete',(req,res)=>{
    con.query(`DELETE FROM Customers WHERE name='Priyanshu'`,(err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        };
        console.log('1 row deleted')
        res.json(result);
    });
});

app.get('/update',(req,res)=>{
    con.query(`UPDATE Customers SET address="Pune" WHERE name="Vedika"`,(err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
            return;
        };
        console.log('1 row updated')
        res.send(result);
    });
});


app.listen(3000,()=>{
    console.log('Server started on port http://localhost:3000');
});