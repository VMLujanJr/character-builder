const Character = require('./Character');
const Party = require('./Party');
const Statistics = require('./Statistics');
const User = require('./User');

// create associations
User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Character, {
    through: Party,
    as: 'party_id',
    foreignKey: 'user_id'
});

Character.belongsToMany(User, {
    through: Party,
    as: 'party_id',
    foreignKey: 'character_id'
});

Party.belongsTo(User, {
    foreignKey: 'user_id'
});

Party.belongsTo(Character, {
    foreignKey: 'character_id'
});

Party.hasMany(Character, {
    foreignKey: 'character_id'
});

User.hasMany(Party, {
    foreignKey: 'user_id'
});

Character.hasMany(Party, {
    foreignKey: 'character_id'
});

Statistics.belongsTo(User, {
    foreignKey: 'user_id'
});

Statistics.belongsTo(User, {
    foreignKey: 'character_id'
});

User.hasMany(Statistics, {
    foreignKey: 'user_id'
});

Character.hasMany(Statistics, {
    foreignKey: 'character_id'
});

module.exports = { Character, Party, Statistics, User };