const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account');

const app = express();


const port = 3000;

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.db,  {  useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Мы успешно подключились к БД');
});

mongoose.connection.on('error', (err) => {
    console.log('Мы не подключились к БД: ' + err);
});

app.get ('/', function (req, res) {
    res.send('Главная страница сайта!!!');
});

app.use('/account', account);


app.listen(port, function () {
    console.log('сервер запущен по порту: ' + port);
});
