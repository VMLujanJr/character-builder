const sequelize = require("../config/connection");
const { User, Character } = require("../models");

const userData = [
  {
    username: "Victor",
    email: "victor@yahoo.com",
    password: "password12345",
  },
  {
    username: "Michael",
    email: "michael@yahoo.com",
    password: "password12345",
  },
  {
    username: "Keith",
    email: "keith@yahoo.com",
    password: "password12345",
  },
  {
    username: "Barney",
    email: "barney@yahoo.com",
    password: "password12345",
  },
  {
    username: "LeroyJenkins",
    email: "leroyjenkins@chargeatrandom.net",
    password: "password12345",
  },
  {
    username: "Elly",
    email: "elly@yahoo.com",
    password: "password12345",
  },
  {
    username: "TimtheWizard",
    email: "tim@behindtherabbit.com",
    password: "password12345",
  },
  {
    username: "Larlac",
    email: "larlac@yahoo.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
