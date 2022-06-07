const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Victor",
    email: "victor@yahoo.com",
    password: "password12345",
  },
  {
    id: 2,
    username: "Michael",
    email: "michael@yahoo.com",
    password: "password12345",
  },
  {
    id: 3,
    username: "Keith",
    email: "keith@yahoo.com",
    password: "password12345",
  },
  {
    id: 4,
    username: "Barney",
    email: "barney@yahoo.com",
    password: "password12345",
  },
  {
    id: 5,
    username: "LeroyJenkins",
    email: "leroyjenkins@chargeatrandom.net",
    password: "password12345",
  },
  {
    id: 6,
    username: "Elly",
    email: "elly@yahoo.com",
    password: "password12345",
  },
  {
    id: 7,
    username: "TimtheWizard",
    email: "tim@behindtherabbit.com",
    password: "password12345",
  },
  {
    id: 8,
    username: "Larlac",
    email: "larlac@yahoo.com",
    password: "password12345",
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
