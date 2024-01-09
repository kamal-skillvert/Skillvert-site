const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();

// express middlewhere
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// my sql connection 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "skillvert"
})

// Connect to MySql 
db.connect((err) => {
    if (err) {
        console.log("Error in connecting database", err.stack);
    }
    {
        console.log("Connected to mysql database ");
    }
})

// express router 

app.get("/api/fetchData", (req, res) => {
    const selectQuery = "SELECT * FROM userData";
    db.query(selectQuery, (err, result) => {
        if (err) {
            throw err
        }
        else {
            res.status(200).json(result);
        }
    })
})

app.post("/api/addData", (req, res) => {
    const { name, email, number, password } = req.body;
    const insertQuery = `INSERT INTO userData (name, email, number, password) VALUES (?,?,?,?)`
    db.query(insertQuery, [name, email, number, password], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(201).json(result);
        }
    })

})

app.listen(port, () => {
    console.log("Port is running on " + port);
})
