const User = require("./User");
const Party = require("./Party");
const Statistic = require("./Statistic");
const Character = require("./Character");

// create associations
User.hasMany(Character, {
  foreignKey: "user_id",
});

Character.belongsTo(User, {
  foreignKey: "user_id",
});

Character.hasOne(Statistic, {
  foreignKey: 'statistic_id'
});

Statistic.belongsTo(Character, {
  foreignKey: 'statistic_id'
});

Party.hasMany(Character, {
  foreignKey: 'party_id'
});

Character.belongsTo(Party, {
  foreignKey: 'party_id'
});

module.exports = { User, Character, Statistic, Party };
