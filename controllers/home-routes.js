const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/dashboard', withAuth, (req,res) => {
    res.json('Here is the glorious dashboard page!')
})

module.exports = router;