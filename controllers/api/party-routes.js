const router = require("express").Router();
const { Party } = require('../../models');

router.get("/", (req, res) => {
    Party.findAll()
      .then((dbPartyData) => res.json(dbPartyData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get("/:id", (req, res) => {
    Party.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id",
            "party_name"
        ]
    })
    .then((dbPartyData) => {
        if(!dbPartyData) {
            res.status(404).json({ message: "Lone ranger traveling, no party present" });
            return;
        }
        res.json(dbPartyData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    Party.create({
        id: req.body.id,
        party_name: req.body.party_name
    })
    .then((dbPartyData) => res.json(dbPartyData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
    Party.update(
        {
            id: req.body.id,
            party_name: req.body.party_name
        },
        {
            where: {
                id: req.body.id
            }
        }
    )
    .then((dbPartyData) => {
        if(!dbPartyData) {
            res.status(404).json({ message: "Lost to the sands of time, alone" });
            return;
        }
        res.json(dbPartyData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Party.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbPartyData) => {
        if(!dbPartyData) {
            res.status(404).json({ message: "Last man standing" });
            return;
        }
        res.json(dbPartyData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;