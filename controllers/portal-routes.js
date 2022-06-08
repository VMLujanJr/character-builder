const sequelize = require('../config/connection.js');
const { User, Character, Party, Statistic } = require('../models');
const router = require('express').Router();

/* NOTE: Once you sign-up, you should immediately be sent to the login page or portal page? */

// [ http://localhost:3001/portal ]
router.get('/', (req, res) => { // ...test
    res.render('portal', { // handlebars extension is implied
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