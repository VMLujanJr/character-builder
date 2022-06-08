const router = require('express').Router();
const sequelize = require("../../config/connection");
const { Character, User, Statistic, Party } = require("../../models");

//GET ALL characters
router.get("/", (req, res) => {
    Character.findAll()
    .then((dbCharacterData) => res.json(dbCharacterData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET BY ID character 
router.get("/:id", (req,res) => {
    Character.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username', 'email',]
            },
            {
                model: Statistic,
                attributes: ['id', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
            },
            {
                model: Party,
                attributes: ['id', 'party_name']
            }
        ]
    })
    .then(dbCharacterData => {
        if(!dbCharacterData) {
            res.status(404).json({ message: 'No imagination, no character found' });
            return;
        }
        res.json(dbCharacterData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    Character.create({
        id: req.body.id,
        character_name: req.body.character_name,
        race: req.body.race,
        statistic_id: req.body.statistic_id,
        party_id: req.body.party_id,
        user_id: req.body.user_id
    })
    .then((dbCharacterData) => res.json(dbCharacterData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
    Character.update(
        {
        id: req.body.id,
        character_name: req.body.character_name,
        race: req.body.race,
        statistic_id: req.body.statistic_id,
        party_id: req.body.party_id
        },
        {
            where: {
                id: req.body.id,
            }
        }
    )
    .then((dbCharacterData) => {
        if(!dbCharacterData) {
            res.status(404).json({ message: "Not sure how you messed this up but you did" });
            return;
        }
        res.json(dbCharacterData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbCharacterData) => {
        if(!dbCharacterData) {
            res.status(404).json({ message: "much sad, very unfortunate" });
            return;
        }
        res.json(dbCharacterData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;