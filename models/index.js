const User = require("./User");
const Character = require("./Character");
const Statistic = require("./Statistic");
const Party = require("./Party");

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

Statistic.belongsTo(User, {
  foreignKey: "user_id",
});

Statistic.belongsTo(Character, {
  foreignKey: "character_id",
});

User.hasMany(Statistic, {
  foreignKey: "user_id",
});

/* ugah bunga stops here */

Party.hasMany(Character, {
  foreignKey: "party_id",
});

Character.belongsTo(Party, {
  foreignKey: "party_id",
});

module.exports = { User, Character, Statistic, Party };
