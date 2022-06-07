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
        },
        statistic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'statistic',
                key: 'id'
            }
        },
        party_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'party',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'toon',
    }
);

module.exports = Character;

