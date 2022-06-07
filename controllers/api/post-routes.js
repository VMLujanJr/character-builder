const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Character, Statistic, Party } = require('../../models');