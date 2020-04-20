const express = require('express');
const router = express.Router();
const User = require('../models/user');

// router.get ('/reg', function (req, res) {
//     res.send('Страница регистрации');
// });

router.post ('/reg', function (req, res) {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    });

    User.addUser(newUser, (errr, user) => {
        if(err)
            res.json({success: false, msg: 'Пользователь не был добавлен!'});
        else
            res.json({success: true, msg: 'Пользователь добавлен!'});

    });
});

router.get ('/auth', function (req, res) {
    res.send('Страница авторизации');
});

router.get ('/dashboard', function (req, res) {
    res.send('Личный кабинет');
});

module.exports = router;
