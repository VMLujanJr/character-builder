//functions building the seeding pattern
const seedUsers = require("./user-seeds.js");
const seedParties = require("./party-seeds.js");
const seedStatistics = require("./statistic-seeds.js");
const seedCharacters = require("./character-seeds.js");

const sequelize = require("../config/connection.js");

/* If tables NOT seeded in proper order, mistakes are made where tables are not seeded at all... reorganize tables */
//Asyncronous functions that activate the seed files
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedStatistics();
  console.log("\n----- STATISTICS SEEDED -----\n");

  await seedParties();
  console.log("\n----- PARTIES SEEDED -----\n");

  await seedCharacters();
  console.log("\n----- CHARACTERS SEEDED -----\n");

  process.exit(0);
};

//command that activates the functions
seedAll();
