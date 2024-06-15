import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/Database.js';

const User = db.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default User;
