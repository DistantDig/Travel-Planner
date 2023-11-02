const { Module, DataTypes } = require('sequelize');
const sequelize = requre('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traveller'
    }
);

module.exports = Traveller;