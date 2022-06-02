const Character = require('./Character');
const Party = require('./Party');
const Statistic = require('./Statistic');
const User = require('./User');

// create associations
User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

/* One-to-one relationship; if problem, problem here... */
Character.hasOne(Statistic, {
    foreignKey: {
        name: 'statistics_id'
    }
});

Statistic.belongsTo(Character, {
    foreignKey: {
        name: 'character_id'
    }
});

/* ugah bunga stops here */

Party.hasMany(Character, {
    foreignKey: 'party_id'
});

Character.belongsTo(Party, {
    foreignKey: 'party_id'
});

module.exports = { Character, Party, Statistic, User };

/* 
User is parent to Character,
Character is child to User.

Character is parent to Statistics,
Statistics is child to Character.

Character hasOne Statistic,
Statistic hasOne Character.

Party is the parent to many Characters,
Character is a child to Party.

Children ALWAYS reference the parent, NOT THE OTHER WAY AROUND.

USER has many CHARACTERS
CHARACTER belongs to one USER

USER + CHARACTER = Many-to-One relationship.

hasMany
belongsTo
*/