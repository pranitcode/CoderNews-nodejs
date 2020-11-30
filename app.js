const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//static files
app.use(express.static('public'));
app.use('/css', express.static( __dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static( __dirname + 'public/js'));

//templates engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//router
const newsRouter = require('./src/routes/news');

app.use('/', newsRouter);// newsRouter export from news.js
app.use('/article', newsRouter);


//listioning the port 
app.listen(port, () => console.log(`listioning on port ${port}`));