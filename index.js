const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended :true}));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
});

app.post("/", (req, res) => {
    let sum= parseInt(req.body.firstNumber) + parseInt(req.body.secondNumber) + parseInt(req.body.thirdNumber)
    let average = sum/3 
    console.log(sum,req.body)
    res.send( average.toString());
});

app.get("/:name", (req, res) => {

    res.sendFile("result", {result: "Name: " + req.params.name});
});

app.listen(3000, () => {
    console.log("server is running on port" );
});