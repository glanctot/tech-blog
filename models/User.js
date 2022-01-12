const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User Model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // table columns here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        // pass in imported sequelize connection
        sequelize,
        // dont automatically create timestamps
        timestamps: false,
        // dont pluralize name of table
        freezeTableName: true,
        // use underscores instead of camel casing
        underscored: true,
        // make it so our model name stays lowercase in database
        modelName: 'user'
    }
)

module.exports = User;