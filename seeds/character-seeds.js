const { Character } = require('../models');


const characterData = [
    {
        id: 1,
        character_name: 'Victor',
        race: 'Elf',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        id: 2,
        character_name: 'Michael',
        race: 'Mage',
        statistic_id: 1,
        party_id: 2,
        user_id: 2
    },
    {
        id: 3,
        character_name: 'Keith',
        race: 'Warlock',
        statistic_id: 1,
        party_id: 3,
        user_id: 3
    },
    {
        id: 4,
        character_name: 'Barney',
        race: 'Dinosaur',
        statistic_id: 1,
        party_id: 4,
        user_id: 4
    },
    {

        id: 5,
        character_name: 'Leroy',
        race: 'Dwarf',
        statistic_id: 1,
        party_id: 5,
        user_id: 5
    },
    {
        id: 6,
        character_name: 'Elly',
        race: 'Nord',
        statistic_id: 1,
        party_id: 6,
        user_id: 6
    },
    {
        id: 7,
        character_name: 'Tim',
        race: 'Human',
        party_id: 7,
        statistic_id: 1,
        user_id: 7
    },
    {
        id: 8,
        character_name: 'Larlac',
        race: 'Lizardfolk',
        statistic_id: 1,
        party_id: 8,
        user_id: 8
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;