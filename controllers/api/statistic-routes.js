const router = require("express").Router();
const { Statistic } = require("../../models");

router.get("/", (req, res) => {
  Statistic.findAll()
    .then((dbStatisticData) => res.json(dbStatisticData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Statistic.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        "id",
        "strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma"
    ]
  })
    .then((dbStatisticData) => {
      if (!dbStatisticData) {
        res.status(404).json({ message: "You Don't Exist! No Power Here!" });
        return;
      }
      res.json(dbStatisticData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Statistic.create({
    id: req.body.id,
    strength: req.body.strength,
    dexterity: req.body.dexterity,
    constitution: req.body.constitution,
    intelligence: req.body.intelligence,
    wisdom: req.body.wisdom,
    charisma: req.body.charisma,
  })
    .then((dbStatisticData) => res.json(dbStatisticData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Statistic.update(
    {
      id: req.body.id,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
    },
    {
        where: {
            id: req.body.id,
        }
    }
  )
    .then((dbStatisticData) => {
      if (!dbStatisticData) {
        res.status(404).json({ message: "You are forlorn, no powers here" });
        return;
      }
      res.json(dbStatisticData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Statistic.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbStatisticData) => {
      if (!dbStatisticData) {
        res.status(404).json({ message: "How unfortunate, a lonely ghost" });
        return;
      }
      res.json(dbStatisticData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
// A conditional findbyid route for statistics
// router.post('/', (req, res) => {
//     Statistic.findOne({
//         where: {
//             id: req.body.id
//         }
//     }).then(dbStatisticData => {
//         if(!dbStatisticData) {
//             res.status(404).json({ message: 'You are forlorn, no powers here' });
//             return;
//         }
//     });
// });
