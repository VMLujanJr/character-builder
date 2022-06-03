const { Character } = require('../models');

const characterData = [
    {
        character_id: 1,
        character_name: 'Victor',
        race: 'Elf',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        character_id: 2,
        character_name: 'Michael',
        race: 'Mage',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        character_id: 3,
        character_name: 'Keith',
        race: 'Warlock',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        character_id: 4,
        character_name: 'Barney',
        race: 'Dinosaur',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {

        character_id: 5,
        character_name: 'Leroy',
        race: 'Dwarf',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        character_id: 6,
        character_name: 'Elly',
        race: 'Nord',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        character_id: 7,
        character_name: 'Tim',
        race: 'Human',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
    {
        character_id: 8,
        character_name: 'Larlac',
        race: 'Lizardfolk',
        statistic_id: 1,
        party_id: 1,
        user_id: 1
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;