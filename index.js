const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const flash = require('flash')
const session = require('express-session');
const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(session({
    secret: "This is my long String that is used for session",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash());

app.get('/', function(req, res){
    
    res.render('index')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});