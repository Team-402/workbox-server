/**
 * Created by Corey600 on 16/4/16.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('label_belong', {
        // ID(主键)
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // 用户ID
        userId: {
            field: 'user_id',
            type: DataTypes.STRING,
            allowNull: false
        },
        // 标签ID
        labelId: {
            field: 'label_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // 有效状态
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
        tableName: 'label_belong',
        freezeTableName: true
    });
};
