const { PlayerCharacter } = require('../models');

const PlayerCharacterData = [
    {
        id: 1,
        pc_name: 'Victor',
        race: 'Elf',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {
        id: 2,
        pc_name: 'Michael',
        race: 'Mage',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {
        id: 3,
        pc_name: 'Keith',
        race: 'Warlock',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {
        id: 4,
        pc_name: 'Barney',
        race: 'Dinosaur',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {

        id: 5,
        pc_name: 'Leroy',
        race: 'Dwarf',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {
        id: 6,
        pc_name: 'Elly',
        race: 'Nord',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {
        id: 7,
        pc_name: 'Tim',
        race: 'Human',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
    {
        id: 8,
        pc_name: 'Larlac',
        race: 'Lizardfolk',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        party_id: 1,
        user_id: 1
    },
];

const seedPlayerCharacter = () => PlayerCharacter.bulkCreate(PlayerCharacterData);

module.exports = seedPlayerCharacter;