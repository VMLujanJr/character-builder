const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Character, Party, Statistic } = require("../models");

// get all users 
router.get('/', (req, res) => {
    console.log("==============================");
    User.findAll({
        attributes: [
            ''
        ]
    })
})