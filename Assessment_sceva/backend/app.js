const express = require('express');
const app = express();

const mongoose = require('./database/mongoose');
const Employee = require('./database/models/employeeSchema')
var cors = require('cors')

app.use(cors())
app.use(express.json());
var x;
app.get('/employee', (req, res) => {
    Employee.find()
        .then(employee => res.send(employee))
        .catch((error) => console.log(error))
})
app.get('/employee/:searchWord', (req, res) => {
    // console.log(req.params.searchWord, "req.params.searchWord")
    Employee.find({ $text: { $search: req.params.searchWord } })
        .then(employee => res.send(employee))
        .catch((error) => console.log(error))
})
app.post('/employee/:searchWord', (req, res) => {
    console.log(req.params.searchWord, "req.params.searchWord")
    console.log(req.body.payload, "req.Body")
    Employee.find({
        $and: [{ $text: { $search: req.params.searchWord } },
        { first_name: req.body.payload.firstName },
        { age: { $gt: req.body.payload.minAge, $lt: req.body.payload.maxAge } },
        { salary: { $lt: req.body.payload.maxSalary } },
        { salary: { $gt: req.body.payload.minSalary } },
        { job_title: req.body.payload.jobTitle }
        ]
    })
        .then(employee => {
            console.log(employee, "res");
            res.send(employee);
        })
        .catch((error) => console.log(error))

})

app.listen(3000, () => console.log("Server backend Started at 3000"));