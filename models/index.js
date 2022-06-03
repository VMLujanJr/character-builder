/* 
User is parent to Character,
Character is child to User.

Character is parent to Statistics,
Statistics is child to Character.

Character hasOne Statistic,

Party is the parent to many Characters,
Character is a child to Party.

Children ALWAYS reference the parent, NOT THE OTHER WAY AROUND.

USER has many CHARACTERS
CHARACTER belongs to one USER

USER + CHARACTER = Many-to-One relationship.

hasMany
belongsTo
*/
const User = require('./User');
const Character = require('./Character');
const Statistic = require('./Statistic');
const Party = require('./Party');



// create associations
User.hasMany(Character, {
    foreignKey: "user_id",
});

Character.belongsTo(User, {
    foreignKey: "user_id",
});

Character.hasOne(Statistic, {
    foreignKey: "statistic_id",
});

Statistic.belongsTo(Character, {
    foreignKey: "character_id",
});

/* ugah bunga stops here */

Party.hasMany(Character, {
    foreignKey: 'party_id',
});

Character.belongsTo(Party, {
    foreignKey: 'party_id',
});

module.exports = { User, Character, Statistic, Party };

