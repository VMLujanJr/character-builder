const sequelize = require('../config/connection.js');
const { User, Character, Party, Statistic } = require('../models');
const router = require('express').Router();

/* NOTE: Once you login, you should immediately be sent to the portal page. */

// [ http://localhost:3001/login ]
router.get('/', (req, res) => { // ...test
    res.render('login', { // handlebars extension is implied
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