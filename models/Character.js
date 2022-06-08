const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        character_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        race: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'player_character',
    }
);

module.exports = Character;

