import { sequelize } from "../db/db.js";
import { DataTypes } from "sequelize";
import { Token } from "./Token.js";

export const User = sequelize.define('userAccount', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

Token.belongsTo(User,{
    foreignKey:'userId',
    onDelete:'cascade',
    allowNull:false
})