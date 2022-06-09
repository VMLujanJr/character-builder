const { Party } = require('../models');

const partyData = [
    {
        id: 1,
        party_name: 'Escabar',
    },
    {
        id: 2,
        party_name: 'Excaliber',
    },
    {
        id: 3,
        party_name: 'DeathSic',
    },
    {
        id: 4,
        party_name: 'Barney\'s Workshop',
    },
    {
        id: 5,
        party_name: 'Leroy',
    },
    {
        id: 6,
        party_name: 'Elly',
    },
    {
        id: 7,
        party_name: 'Tim',
    },
    {
        id: 8,
        party_name: 'Larlac',
    },
];

const seedParties = () => Party.bulkCreate(partyData);

module.exports = seedParties;