const User = require("./User");
const Party = require("./Party");
const PlayerCharacter = require("./PlayerCharacter");

// create associations
User.hasMany(PlayerCharacter, {
  foreignKey: "user_id",
});

PlayerCharacter.belongsTo(User, {
  foreignKey: "user_id",
});

Party.hasMany(PlayerCharacter, {
  foreignKey: 'party_id'
});

PlayerCharacter.belongsTo(Party, {
  foreignKey: 'party_id'
});

module.exports = { User, Party, PlayerCharacter };