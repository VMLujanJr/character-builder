const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Char_Stats extends Model { }

Char_Stats.init(
    {
        pc_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'player_character',
                key: 'id'
            }
        },
        stat_id: {
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
        modelName: 'char_stats',
    }
);

module.exports = Char_Stats;