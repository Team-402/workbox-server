/**
 * Created by fcx on 16/4/16.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('job_info', {
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
        // 开始时间(换算成从零点开始的分钟数)
        beginTime: {
            field: 'begin_time',
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        // 结束时间(换算成从零点开始的分钟数)
        endTime: {
            field: 'end_time',
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
    });
};
