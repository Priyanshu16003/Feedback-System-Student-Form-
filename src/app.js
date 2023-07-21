const express = require("express")
const hbs = require("hbs")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');
const mongoose = require("mongoose")
const routes = require('./routes/main_routes')
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static',express.static("public"))
app.use('',routes)

app.set('view engine','hbs')
const viewsPath = path.join(__dirname, '..', 'views');
const partialPath = path.join(__dirname, '..', 'views/partials');
app.set('views', viewsPath);

hbs.registerPartials(partialPath)

mongoose.connect("mongodb://127.0.0.1:27017/Student_Response")
        .then(()=>{
            console.log("db Connected");
        }
)

app.listen(8800,()=>{
    console.log("Server Initiated")
});