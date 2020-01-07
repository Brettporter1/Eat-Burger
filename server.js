const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controller')
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`connected to port: ${PORT}`);
})