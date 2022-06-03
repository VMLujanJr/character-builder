const { Statistic } = require('../models');

const statisticData = [
    {
        id: 1,
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        user_id: 1,
        character_id: 1,
    },
];

const seedStatistics = () => Statistic.bulkCreate(statisticData);

module.exports = seedStatistics;