/**
 * Created by Corey600 on 16/4/16.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('label_info', {
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
        // 图片URL
        imageUrl: {
            field: 'image_url',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
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
        tableName: 'label_info',
        freezeTableName: true
    });
};
