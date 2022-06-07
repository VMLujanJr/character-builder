const { Party } = require('../models');

const partyData = [
    {
        id: 1,
        party_name: 'Victor',
    },
    {
        id: 2,
        party_name: 'Michael',
    },
    {
        id: 3,
        party_name: 'Keith',
    },
    {
        id: 4,
        party_name: 'Barney',
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