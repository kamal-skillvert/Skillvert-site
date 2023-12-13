const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

// mysql connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "skillvert"
});

// Connect to MySql 
db.connect((err) => {
    if (err) {
        console.log("error connecting to mysql" + err.stack);
    }
    console.log("Connected to mysql" + db.threadId);
})


// Your API routes

app.listen(port, () => {
    console.log("port is running on " + port);
});


// Endpoints

// Example endpoints

app.get('/api/fetchData', (req, res) => {
    const selectQuery = 'SELECT * FROM userData';
    db.query(selectQuery, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


app.post('/api/addData', (req, res) => {
    const { firstName, middleName, lastName, email, phoneNumber, password, dob } = req.body;
    const insertQuery = `INSERT INTO userData (firstName, middleName, lastName, email, phoneNumber, password, dob) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(insertQuery, [firstName, middleName, lastName, email, phoneNumber, password, dob], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Data added successfully');
    });
});


