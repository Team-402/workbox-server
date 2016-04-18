/**
 * Created by Corey600 on 16/4/16.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('top_label', {
        // ID(主键)
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // 名称
        name: {
            field: 'name',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 使用数
        usedCount: {
            field: 'used_count',
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        // 创建时间
        addTime: {
            field: 'add_time',
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        // 更新时间
        updateTime: {
            field: 'update_time',
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        }
    }, {
        tableName: 'top_label',
        freezeTableName: true
    });
};
