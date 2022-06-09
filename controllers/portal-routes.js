const sequelize = require('../config/connection.js');
const { User, PlayerCharacter, Party } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth.js');

/* NOTE: Once you sign-up, you should immediately be sent to the login page or portal page? */

// [ http://localhost:3001/portal ]
/* router.get('/', (req, res) => { // ...test
    res.render('portal', { // handlebars extension is implied
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebars Docs',
        created_at: new Date(),
        vote_count: 10,
        loggedIn: req.session.loggedIn,
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
}); */

// [ http://localhost:3001/portal ] // REPLACE TOP
router.get('/', (req, res) => {
    PlayerCharacter.findAll({
        attributes: [
            "id",
            "pc_name",
            "race",
            "strength",
            "dexterity",
            "constitution",
            "intelligence",
            "wisdom",
            "charisma",
/*             "user_id",
            "party_id" */
        ]
    })
    .then(dbCharacterData => {
        const pcs = dbCharacterData.map(pc => pc.get({ plain: true}));
        res.render('portal', {
            pcs,
            loggedIn: req.session.loggedIn
        })
    })
});

// FIND ALL PARTIES
router.get('/', withAuth, (req, res) => {
    Party.findAll({
        attributes: [
            "id",
            "party_name"
        ]
    })
    .then((dbPartyData) => res.json(dbPartyData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;