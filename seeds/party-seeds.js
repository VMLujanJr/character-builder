const { Party } = require('../models');

const partyData = [
    {
        party_name: 'Victor',
    },
    {
        party_name: 'Michael',
    },
    {
        party_name: 'Keith',
    },
    {
        party_name: 'Barney',
    },
    {
        party_name: 'Leroy',
    },
    {
        party_name: 'Elly',
    },
    {
        party_name: 'Tim',
    },
    {
        party_name: 'Larlac',
    },
];

const seedParties = () => Party.bulkCreate(partyData);

module.exports = seedParties;