const { Party } = require('../models');

const partyData = [
    {
        username: 'Victor',
        email: 'victor@yahoo.com',
    },
    {
        username: 'Michael',
        email: 'michael@yahoo.com',
    },
    {
        username: 'Keith',
        email: 'keith@yahoo.com',
    },
    {
        username: 'Barney',
        email: 'barney@yahoo.com',
    },
    {
        username: 'Leroy',
        email: 'leroy@sbcglobal.net'
    },
    {
        username: 'Elly',
        email: 'elly@yahoo.com',
    },
    {
        username: 'Tim',
        email: 'tim@aol.com',
    },
    {
        username: 'Larlac',
        email: 'larlac@yahoo.com',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;