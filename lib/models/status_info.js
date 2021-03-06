/**
 * Created by Corey600 on 16/4/16.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('status_info', {
        // ID(主键)
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // 用户ID(外键)
        userId: {
            field: 'user_id',
            type: DataTypes.STRING,
            allowNull: false
        },
        // 开始时间
        beginTime: {
            field: 'begin_time',
            type: DataTypes.DATE,
            defaultValue: null,
            allowNull: true
        },
        // 结束时间
        endTime: {
            field: 'end_time',
            type: DataTypes.DATE,
            defaultValue: null,
            allowNull: true
        },
        // 标签ID(外键)
        labelId: {
            field: 'label_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // 详细描述
        describe: {
            field: 'describe',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 状态标示 0 1 2 3
        value: {
            field: 'value',
            type: Sequelize.ENUM,
            values: ['0', '1', '2', '3'],
            defaultValue: null,
            allowNull: true
        },
        // 状态是否有效
        enable: {
            field: 'enable',
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        tableName: 'status_info',
        freezeTableName: true
    });
};
