import { sequelize } from "../db/db.js";
import { DataTypes } from "sequelize";

export const Token = sequelize.define('token', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    usedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('active', 'expired', 'used'),
        defaultValue: 'active'
    }
});
