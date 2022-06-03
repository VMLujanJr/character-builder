const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
            allowNull: true,
            unique: true,
        },
        race: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        statistic_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'statistic',
                key: 'id'
            }
        },
        party_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'party',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;

