const router = require('express').Router();
const sequelize = require("../../config/connection");
const { PlayerCharacter, User, Party } = require("../../models");

//GET ALL characters
router.get("/", (req, res) => {
    PlayerCharacter.findAll()
    .then((dbCharacterData) => res.json(dbCharacterData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET BY ID character 
router.get("/:id", (req,res) => {
    PlayerCharacter.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Party,
                attributes: ['id', 'party_name']
            },
            {
                model: User,
                attributes: ['username', 'email',]
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
    PlayerCharacter.create({
        id: req.body.id,
        pc_name: req.body.pc_name,
        race: req.body.race,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        intelligence: req.body.intelligence,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
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
    PlayerCharacter.update(
        {
        id: req.body.id,
        pc_name: req.body.pc_name,
        race: req.body.race,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        constitution: req.body.constitution,
        intelligence: req.body.intelligence,
        wisdom: req.body.wisdom,
        charisma: req.body.charisma,
        party_id: req.body.party_id,
        user_id: req.body.user_id
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
    PlayerCharacter.destroy({
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