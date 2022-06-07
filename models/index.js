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
  // empty
});

Party.hasMany(Character, {
  foreignKey: 'party_id'
});

Character.belongsTo(Party, {
  foreignKey: 'party_id'
});

/* Character.belongsToMany(User {
  through: Statistic,
  as: "character_stats",
  foreignKey: "character_id"
}); */



// reference
/* User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
}); */




























/* Character.hasOne(Statistic, {
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

/* Party.hasMany(Character, {
  foreignKey: "party_id",
});

Character.belongsTo(Party, {
  foreignKey: "party_id",
}); */

module.exports = { User, Character, Statistic, Party };
