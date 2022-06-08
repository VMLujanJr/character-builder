const { Character } = require('../models');


const characterData = [
    {
        id: 1,
        character_name: 'Victor',
        race: 'Elf'
    },
    {
        id: 2,
        character_name: 'Michael',
        race: 'Mage'
    },
    {
        id: 3,
        character_name: 'Keith',
        race: 'Warlock'
    },
    {
        id: 4,
        character_name: 'Barney',
        race: 'Dinosaur'
    },
    {

        id: 5,
        character_name: 'Leroy',
        race: 'Dwarf'
    },
    {
        id: 6,
        character_name: 'Elly',
        race: 'Nord'
    },
    {
        id: 7,
        character_name: 'Tim',
        race: 'Human'
    },
    {
        id: 8,
        character_name: 'Larlac',
        race: 'Lizardfolk'
    },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;