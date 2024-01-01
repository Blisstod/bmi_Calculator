const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bmiCalculator = require("./bmiCalculator");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.post("/", function (req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const unit = req.body.unit;

    if (weight > 0 && height > 0) {
        const bmi = bmiCalculator.calculateBMI(weight, height, unit);
        console.log(bmi);
        const result = bmiCalculator.interpretBMI(bmi, age, gender);
        res.send(result);
    } else {
        res.send('Please enter valid values for weight and height.');
    }
});

app.listen(port, function () {
    console.log("App listening on port 3000");
});