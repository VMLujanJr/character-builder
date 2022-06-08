const sequelize = require('../config/connection.js');
const { User, Character, Party, Statistic } = require('../models');
const router = require('express').Router();

// [ http://localhost:3001/ ]
router.get('/', (req, res) => { // ...test
    res.render('homepage', { // handlebars extension is implied
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebars Docs',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;